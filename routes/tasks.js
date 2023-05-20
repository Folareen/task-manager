const { Router } = require("express");
const tasksRouter = Router();
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require("../controllers/tasks");

tasksRouter.route("/").get(getAllTasks).post(createTask);
tasksRouter.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = tasksRouter;
