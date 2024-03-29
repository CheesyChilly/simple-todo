import Create from "./Create";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  BsCircleFill,
  BsFillTrashFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://simple-todo-z0a6.onrender.com/get")
      .then((result) => setTodos(result.data))
      .catch((error) => console.log(error));
  });

  const handleDone = (id) => {
    axios
      .put(`https://simple-todo-z0a6.onrender.com/done/${id}`)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  const handleNotdone = (id) => {
    axios
      .put(`https://simple-todo-z0a6.onrender.com/notdone/${id}`)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const taskDelete = (id) => {
    axios
      .delete(`https://simple-todo-z0a6.onrender.com/delete/${id}`)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-black font-mono mt-5 text-[32px]">Todo list</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No records</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div
            key={todo._id}
            className="flex items-center w-[345px] justify-between bg-[black] text-[white] h-[40px] px-[10px] py-[2px] mt-[3px] rounded-[5px]">
            <div className="flex items-center">
              {todo.done ? (
                <BsFillCheckCircleFill
                  className="m-[3px] font-[15px] cursor-pointer"
                  onClick={() => handleNotdone(todo._id)}
                />
              ) : (
                <BsCircleFill
                  className="m-[3px] font-[15px] cursor-pointer"
                  onClick={() => handleDone(todo._id)}
                />
              )}
              <p
                className={
                  todo.done
                    ? "ml-[10px] line-through  text-[#b6b6b6]"
                    : "ml-[10px]"
                }>
                {todo.task}
              </p>
            </div>
            <div className="flex">
              <span className="mr-[5px] ml-[4px]">
                <BsFillTrashFill
                  className="mr-[5px] font-[15px] cursor-pointer"
                  onClick={() => taskDelete(todo._id)}
                />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
