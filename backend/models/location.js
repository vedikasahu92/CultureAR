const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  type: String,
  name: String,
  state: String,
  country: String
});

module.exports = mongoose.model("Location", locationSchema);