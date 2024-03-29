import Create from "./Create";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((result) => setTodos(result.data))
      .catch((error) => console.log(error));
  });
  return (
    <div className="flex flex-col items-center">
      <h2>Todo list</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No records</h2>
        </div>
      ) : (
        todos.map((todo) => <div key={todo._id}>{todo.task}</div>)
      )}
    </div>
  );
}

export default Home;
