// routes/userRoutes.js
const express = require("express");
const router = express.Router();
// ------
// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// GET route
router.get("/", (req, res) => {
  res.send("All users");
});




// POST route
router.post("/", (req, res) => {
  res.send("User created");
});




// dynamic route
router.get("/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// module.exports = router;

// ------------------------------

router.post("/tasks", async (req, res) => {
  try {
    const { title, userId } = req.body;

    if (!title || !userId) {
      return res.status(400).json({ message: "Title and userId required" });
    }

    const task = new Task({ title, userId });
    await task.save();

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get("/tasks/:userId", async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.params.userId });

    if (tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found" });
    }

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/tasks/:taskId", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.taskId,
      { completed: true },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.delete("/tasks/:taskId", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.taskId);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;