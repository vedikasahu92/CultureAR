require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const locationRoutes = require("./routes/locationroutes");
const cultureRoutes = require("./routes/cultureroutes");
const reviewRoutes = require("./routes/reviewroutes");

const authRoutes = require("./routes/auth");
const chatRoutes = require("./routes/chatroutes");
const videoRoutes = require("./routes/videoRoutes");

const State = require("./models/state");
const culturalData = require("./data/culturaldata");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", locationRoutes);
app.use("/api/culture", cultureRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", chatRoutes);
app.use("/api/videos", videoRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Culture Explorer Backend is Running");
});

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/cultureExplorer")
  .then(async () => {
    console.log("MongoDB Connected Successfully");

    // Upsert cultural data with returnDocument option to prevent deprecation warnings
    await Promise.all(
      culturalData.map((state) =>
        State.findOneAndUpdate(
          { name: state.name },
          { $set: state },
          { upsert: true, returnDocument: 'after' }
        )
      )
    );
    
    console.log(`${culturalData.length} cultural state records saved/updated successfully`);
  })
  .catch((err) => console.error("MongoDB Connection Error:", err.message));

// Server Start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});