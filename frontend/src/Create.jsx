import { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);
  const handleAdd = () => {
    axios
      .post("http://localhost:5000/add", { task: task })
      .then((result) => {
        setLoading(false);
        setTask("");
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter task"
        id=""
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-[300px] p-[9px] ml-2 rounded-[10px] border-2"
      />
      <button
        type="button"
        className="p-[10px] m-2 bg-[black] rounded-[10px] text-[white] cursor-pointer"
        onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;
