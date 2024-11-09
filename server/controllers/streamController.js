const Stream = require("../models/Stream");

exports.createStream = async (req, res) => {
  try {
    const stream = await Stream.create({ streamer: req.user.id, ...req.body, isLive: true });
    res.status(201).json(stream);
  } catch (error) {
    res.status(500).json({ error: "Stream creation failed" });
  }
};

exports.getLiveStreams = async (req, res) => {
  try {
    const streams = await Stream.find({ isLive: true }).populate("streamer", "username");
    res.json(streams);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve live streams" });
  }
};
