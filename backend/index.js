import { PORT, MDB_URL } from "./config.js";
import mongoose from "mongoose";
import express, { request } from "express";
import cors from "cors";
import { TodoModel } from "./models/TodoModel.js";

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Database connected");
});

app.get("/get", (request, response) => {
  TodoModel.find()
    .then((result) => response.json(result))
    .catch((error) => {
      response.json(error);
      console.log(error);
    });
});

app.post("/add", (request, response) => {
  const task = request.body.task;
  TodoModel.create({
    task: task,
  })
    .then((result) => response.json(result))
    .catch((error) => response.json(error));
});

mongoose
  .connect(MDB_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
