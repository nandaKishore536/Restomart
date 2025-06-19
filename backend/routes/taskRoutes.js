const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// GET all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// POST new task
router.post("/", async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;
    const newTask = new Task({ title, description, status, dueDate });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update task by UUID
router.put("/:id", async (req, res) => {
  const task = await Task.findOneAndUpdate({ id: req.params.id }, req.body, {
    new: true,
  });
  task ? res.json(task) : res.sendStatus(404);
});

// DELETE task by UUID
router.delete("/:id", async (req, res) => {
  const task = await Task.findOneAndDelete({ id: req.params.id });
  task ? res.sendStatus(204) : res.sendStatus(404);
});

module.exports = router;
