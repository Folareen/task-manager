const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
    trim: true,
    maxlength: [20, "Name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = model("Task", TaskSchema);

module.exports = Task;
