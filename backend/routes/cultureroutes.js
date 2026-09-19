const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:state", async (req, res) => {
  try {
   const state = decodeURIComponent(req.params.state);

   const response = await axios.get(
  `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(state)}`,
  {
    headers: {
      "User-Agent": "CultureAR/1.0 (CultureAR cultural heritage project)"
    }
  }
);

    res.json({
      name: response.data.title,
      description: response.data.extract,
      image: response.data.thumbnail?.source || null
    });

  } catch (error) {
  console.error("Wikipedia Error:", error.response?.data || error.message);

  res.status(500).json({
    message: "Culture data not found",
    error: error.response?.data || error.message
  });
}
});

module.exports = router;