const express = require("express");
const router = express.Router();
const Event = require("../Models/Event");

// GET ALL EVENTS
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE
router.post("/", async (req, res) => {
  try {
    const event = new Event(req.body);
    const saved = await event.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔥 GET APPROVED
router.get("/approved", async (req, res) => {
  try {
    const events = await Event.find({ status: "approved" })
      .sort({ createdAt: -1 });

    res.json({
      total: events.length,
      events
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔥 GET PENDING
router.get("/pending", async (req, res) => {
  try {
    const events = await Event.find({ status: "pending" });

    res.json({
      total: events.length,
      events
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔥 GET REJECTED
router.get("/rejected", async (req, res) => {
  try {
    const events = await Event.find({ status: "rejected" });

    res.json({
      total: events.length,
      events
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔥 APPROVE
router.put("/approve/:id", async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔥 REJECT
router.put("/reject/:id", async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true }
    );

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔧 UPDATE (GENERIC)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;