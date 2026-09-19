const express = require("express");
const { getAIResponse } = require("../aiservice");

const router = express.Router();

router.post("/chat/message", async (req, res) => {
  const { message, language = "en" } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ message: "A message is required" });
  }

  const response = await getAIResponse(message, language);
  return res.json({ response });
});

module.exports = router;