const mongoose = require("mongoose");

const streamSchema = new mongoose.Schema({
  streamer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: String,
  category: String,
  viewers: { type: Number, default: 0 },
  isLive: { type: Boolean, default: false },
});

module.exports = mongoose.model("Stream", streamSchema);
