import Create from "./Create";
import { useState } from "react";

function Home() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="flex flex-col items-center">
      <h2>Todo list</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No records</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div key="">
            {todo}
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
