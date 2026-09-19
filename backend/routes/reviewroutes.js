const express = require("express");
const Review = require("../models/review");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find({ anonymous: false })
      .sort({ createdAt: -1 })
      .select("rating tags title message name anonymous createdAt");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Reviews could not be loaded" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { rating, tags, title, message, name, email, anonymous } = req.body;

    if (!rating || !title || !message || !name || !email) {
      return res.status(400).json({
        message: "Rating, title, review, name, and email are required"
      });
    }

   const review = await Review.create({
  rating: Number(rating),
  tags: Array.isArray(tags) ? tags : [],
  title,
  message,
 name,
email,
  anonymous: Boolean(anonymous)
});

    res.status(201).json({
      message: "Review submitted successfully",
      review: {
        id: review._id,
        rating: review.rating,
        title: review.title
      }
    });
 
    } catch (error) {
  console.error("REVIEW SUBMIT ERROR:", error);

  res.status(500).json({
    message: "Review could not be submitted",
    error: error.message
  });
}
});

module.exports = router;
