const express = require("express");
const router = express.Router();

const { getAIResponse } = require("../services/aiService");

router.post("/message", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await getAIResponse(message);

    res.json({
      response: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

module.exports = router;