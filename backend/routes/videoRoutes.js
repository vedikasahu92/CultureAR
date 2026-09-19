const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const { GridFSBucket, ObjectId } = require("mongodb");
const UploadedVideo = require("../models/uploadedVideo");

const router = express.Router();
const MAX_VIDEO_SIZE = 100 * 1024 * 1024;
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_VIDEO_SIZE },
  fileFilter: (req, file, callback) => {
    if (!file.mimetype.startsWith("video/")) {
      return callback(new Error("Only video files can be uploaded"));
    }

    callback(null, true);
  }
});

const getBucket = () => {
  if (mongoose.connection.readyState !== 1 || !mongoose.connection.db) {
    throw new Error("Database is not connected");
  }

  return new GridFSBucket(mongoose.connection.db, {
    bucketName: "uploadedVideos"
  });
};

const streamToGridFs = (bucket, file) =>
  new Promise((resolve, reject) => {
    const gridFsId = new ObjectId();
    const stream = bucket.openUploadStreamWithId(gridFsId, file.originalname, {
      contentType: file.mimetype,
      metadata: {
        uploadedFrom: "explore"
      }
    });

    stream.on("error", reject);
    stream.on("finish", () => resolve(gridFsId));
    stream.end(file.buffer);
  });

router.get("/", async (req, res) => {
  const { stateName, category, itemName } = req.query;

  if (!stateName || !category) {
    return res.status(400).json({
      message: "stateName and category are required"
    });
  }

  try {
    const query = {
      stateName,
      category: String(category).toLowerCase()
    };

    if (itemName) {
      query.itemName = itemName;
    } else {
      query.itemName = null;
    }

    const videos = await UploadedVideo.find(query)
      .sort({ createdAt: 1 })
      .lean();

    res.json(
      videos.map((video) => ({
        id: video._id,
        name: video.filename,
        video: `/api/videos/${video._id}/stream`,
        contentType: video.contentType,
        size: video.size,
        uploadedAt: video.createdAt
      }))
    );
  } catch (error) {
    console.error("Error loading uploaded videos:", error.message);
    res.status(500).json({ message: "Uploaded videos could not be loaded" });
  }
});

router.post("/", upload.single("video"), async (req, res) => {
  const { stateName, category, itemName } = req.body;

  if (!stateName || !category) {
    return res.status(400).json({
      message: "stateName and category are required"
    });
  }

  if (!req.file) {
    return res.status(400).json({ message: "A video file is required" });
  }

  try {
    const bucket = getBucket();
    const gridFsId = await streamToGridFs(bucket, req.file);
    const video = await UploadedVideo.create({
      stateName,
      category,
      itemName: itemName || null,
      filename: req.file.originalname,
      contentType: req.file.mimetype,
      size: req.file.size,
      gridFsId
    });

    res.status(201).json({
      id: video._id,
      name: video.filename,
      video: `/api/videos/${video._id}/stream`,
      contentType: video.contentType,
      size: video.size,
      uploadedAt: video.createdAt
    });
  } catch (error) {
    console.error("Error uploading video:", error.message);
    res.status(500).json({ message: "Video upload failed" });
  }
});

router.get("/:id/stream", async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid video id" });
  }

  try {
    const video = await UploadedVideo.findById(req.params.id).lean();

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const bucket = getBucket();
    res.type(video.contentType);
    const stream = bucket.openDownloadStream(video.gridFsId);
    stream.on("error", () => {
      if (!res.headersSent) {
        res.status(404).json({ message: "Video file not found" });
      } else {
        res.destroy();
      }
    });
    stream.pipe(res);
  } catch (error) {
    console.error("Error streaming video:", error.message);
    res.status(500).json({ message: "Video could not be streamed" });
  }
});

router.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(413).json({
        message: "Video is too large. The maximum size is 100 MB."
      });
    }

    return res.status(400).json({ message: error.message });
  }

  if (error?.message === "Only video files can be uploaded") {
    return res.status(400).json({ message: error.message });
  }

  next(error);
});

module.exports = router;
