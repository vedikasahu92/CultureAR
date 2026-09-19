const express = require("express");
const axios = require("axios");
const Location = require("../models/location");
const State = require("../models/state");
const culturalData = require("../data/culturaldata");

const router = express.Router();

const fallbackStates = culturalData.map((state) => ({
  name: state.name,
  country: "India",
  state_code: ""
}));

const saveCulturalState = async (state) => State.findOneAndUpdate(
  { name: state.name },
  { $set: state },
  { upsert: true, new: true, setDefaultsOnInsert: true }
);

router.get("/states/culture", async (req, res) => {
  try {
    const states = await Promise.all(culturalData.map(saveCulturalState));
    res.json(states);
  } catch (error) {
    res.status(500).json({ message: "Cultural state data could not be saved" });
  }
});

router.get("/states/:stateName", async (req, res) => {
  try {
    const requestedName = req.params.stateName.replace(/-/g, " ");
    const state = culturalData.find(
      (item) => item.name.toLowerCase() === requestedName.toLowerCase()
    );

    if (!state) {
      return res.status(404).json({ message: "State culture data not found" });
    }

    const savedState = await saveCulturalState(state);
    const responseState = {
      ...savedState.toObject(),
      ...state,
      _id: savedState._id
    };
    res.json(responseState);
  } catch (error) {
    res.status(500).json({ message: "State culture data could not be loaded" });
  }
});

// Get + Save All Indian States
router.get("/states", async (req, res) => {
  try {
    const states = fallbackStates;

    // Save states in MongoDB
    for (const item of states) {
      await Location.findOneAndUpdate(
        {
          name: item.name,
          type: "state"
        },
        {
          name: item.name,
          type: "state",
          country: "India"
        },
        {
          upsert: true,
          new: true
        }
      );
    }

    res.json(states);

  } catch (error) {
    console.error("Error fetching states from countriesnow API, using fallback data:", error.message);
    for (const item of fallbackStates) {
      await Location.findOneAndUpdate(
        {
          name: item.name,
          type: "state"
        },
        {
          name: item.name,
          type: "state",
          country: "India"
        },
        {
          upsert: true,
          new: true
        }
      );
    }

    res.json(fallbackStates);
  }
});


// Get + Save Cities by State
router.get("/cities/:state", async (req, res) => {
  try {
    const state = req.params.state;

    const response = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/state/cities",
      {
        country: "India",
        state: state
      }
    );

    const cities = response.data.data;

    // Save cities in MongoDB
    for (const city of cities) {
      await Location.findOneAndUpdate(
        {
          name: city,
          type: "city",
          state: state
        },
        {
          name: city,
          type: "city",
          state: state,
          country: "India"
        },
        {
          upsert: true,
          new: true
        }
      );
    }

    res.json(cities);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching cities",
      error: error.message
    });
  }
});

module.exports = router;