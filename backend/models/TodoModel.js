import { mongoose } from "mongoose";

const TodoSchema = new mongoose.Schema({
  task: String,
});

export const TodoModel = mongoose.model("todos", TodoSchema);
