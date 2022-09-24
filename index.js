const express = require("express");
const connectDB = require("./db/connect");
const tasksRouter = require("./routes/tasks");
require("dotenv").config();

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.use("/api/v1/tasks", tasksRouter);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(4000, () => {
      console.log("server started at 4000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
