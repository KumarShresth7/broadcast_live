const User = require("../models/User");

exports.followUser = async (req, res) => {
  try {
    const userToFollow = await User.findById(req.params.id);
    if (!userToFollow) return res.status(404).json({ error: "User not found" });

    const user = await User.findById(req.user.id);
    if (user.followers.includes(userToFollow._id)) return res.json({ message: "Already following" });

    user.followers.push(userToFollow._id);
    await user.save();

    res.json({ message: "User followed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to follow user" });
  }
};
