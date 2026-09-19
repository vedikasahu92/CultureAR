const mongoose = require("mongoose");

const uploadedVideoSchema = new mongoose.Schema(
  {
    stateName: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true, lowercase: true },
    itemName: { type: String, trim: true, default: null },
    filename: { type: String, required: true, trim: true },
    contentType: { type: String, required: true, trim: true },
    size: { type: Number, required: true, min: 1 },
    gridFsId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true
    }
  },
  { timestamps: true }
);

uploadedVideoSchema.index({ stateName: 1, category: 1, itemName: 1 });

module.exports = mongoose.model("UploadedVideo", uploadedVideoSchema);
