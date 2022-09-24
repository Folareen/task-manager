const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TaskSchema = new Schema({
  name: String,
  completed: Boolean,
});

const Task = model("Task", TaskSchema);

module.exports = Task;
