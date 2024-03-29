import { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    axios
      .post("https://simple-todo-z0a6.onrender.com/add", { task: task })
      .then((result) => {
        setTask("");
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="p-4">
      <form>
        <input
          type="text"
          placeholder="Enter task"
          id=""
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-[300px] p-[10px] ml-2 rounded-[10px] border-2 [text-indent:10px]"
        />
        <button
          type="submit"
          className="p-[10px] m-2 bg-[black] rounded-[10px] text-[white] cursor-pointer"
          onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Create;
