const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

const createTask = (req, res) => {
  res.send("Create Task");
};

module.exports = {
  getAllTasks,
  createTask,
};
