const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})

    if (!tasks || tasks.length < 1) return res.status(404).json({ message: "No tasks found" });

    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    if (!req.body.name) return res.status(400).json({ message: "Name is required!" })

    const task = await Task.create(req.body)

    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.find({_id : req.params.id})

    if (!task) return res.status(404).json({ message: "Task does not exist." });

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTask = (req, res) => {
  res.send("Update Task");
};

const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
