const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:state", async (req, res) => {
  try {
    const state = req.params.state;

    const response = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${state}`
    );

    res.json({
      name: response.data.title,
      description: response.data.extract,
      image: response.data.thumbnail?.source || null
    });

  } catch (error) {
    res.status(500).json({
      message: "Culture data not found"
    });
  }
});

module.exports = router;