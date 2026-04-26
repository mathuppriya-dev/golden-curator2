const express = require("express");
const router = express.Router();
const User = require("../Models/User");

const multer = require("multer");
const path = require("path");

// 📸 STORAGE CONFIG
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ==========================
// ✅ GET ALL USERS
// ==========================
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// ==========================
// ✅ CREATE USER (JOIN + IMAGE)
// ==========================
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const isUploaded = !!req.file;

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,

      image: isUploaded
        ? `http://localhost:5000/uploads/${req.file.filename}`
        : `https://i.pravatar.cc/100?u=${req.body.email}`, // 👤 fallback avatar

      imageType: isUploaded ? "uploaded" : "generated", // optional tag
    });

    const saved = await user.save();
    res.json(saved);

  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

// ==========================
// ✅ APPROVE USER
// ==========================
router.put("/approve/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to approve user" });
  }
});

// ==========================
// ❌ DELETE USER
// ==========================
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

module.exports = router;