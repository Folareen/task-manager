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

const createTask = (req, res) => {
  res.send("Create Task");
};

const getTask = (req, res) => {
  res.send("Get Task");
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
