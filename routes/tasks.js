const { Router } = require("express");
const tasksRouter = Router();
const { getAllTasks, createTask } = require("../controllers/tasks");

tasksRouter.route("/").get(getAllTasks).post(createTask);

module.exports = tasksRouter;
