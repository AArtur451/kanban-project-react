import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { uid } from "uid";

export default function Category({ title, tasks }) {
  const [addNewOn, setAddNewOn] = useState();
  const [taskText, setTaskText] = useState("");
  const toggleAddNew = () => setAddNewOn((prev) => !prev);
  const clearInput = () => setTaskText("");
  const handleTaskAdd = () => {
    tasks.push({ id: uid(), name: taskText });
    const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
    tasksLocal.find((el) => el.title === title).issues = tasks;
    localStorage.setItem("tasks", JSON.stringify(tasksLocal));
    toggleAddNew();
    clearInput();
  };

  return (
    <div className="w-[25%] bg-[#EBECF0] px-4 flex-col gap-3 py-3 rounded-[10px]">
      <p className="mb-2 capitalize">{title}</p>
      <div className="flex gap-2 flex-col ">
        {tasks.map((task) => (
          <div className="bg-white p-2 rounded-[5px]" key={task.id}>
            {task.name}
          </div>
        ))}
        {addNewOn && (
          <div className="bg-white p-2 rounded-[5px] border-none">
            {}
            <input
              className="bg-inherit w-full focus:outline-none pb-1"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
            />
          </div>
        )}
      </div>
      {!addNewOn ? (
        <button
          className="flex justify-evenly  py-2 gap-3 items-center text-[#5E6C84]"
          onClick={toggleAddNew}
        >
          <FaPlus className="w-[15px]" />
          Add Card
        </button>
      ) : (
        <button
          className="bg-[#0079BF] mt-3 text-white px-4 py-2"
          onClick={handleTaskAdd}
        >
          Submit
        </button>
      )}
    </div>
  );
}
