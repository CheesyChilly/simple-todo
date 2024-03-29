import { PORT, MDB_URL } from "./config.js";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

console.log("App connected to database");
app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
