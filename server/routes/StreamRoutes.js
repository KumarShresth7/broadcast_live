const express = require("express");
const { createStream, getLiveStreams } = require("../controllers/streamController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, createStream);
router.get("/live", getLiveStreams);

module.exports = router;
