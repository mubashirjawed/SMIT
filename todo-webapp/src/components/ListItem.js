"use client"
import { useState } from "react";

const ListItem = ({ todo }) => {
    const [edit, isEdit] = useState(false)
  return (
    <div
      className={`border flex cursor-pointer p-2 text-center text-3xl w-2/3 mx-auto my-1 ${
        todo.isCompleted ? "bg-teal-100" : "bg-white"
      }`}
    >
      <h1 className="flex flex-grow">{todo.todo}</h1>

      <button className="bg-fuchsia-200 mx-2  p-1 px-2 text-sm rounded">
        {!todo.isCompleted ? "Done" : "Not Done"}
      </button>
      <button className="bg-blue-200 mx-2  p-1 px-2 text-sm rounded">
        Edit
      </button>
      <button className="bg-red-200  mx-2 p-1 px-2 text-sm rounded">
        Delete
      </button>
    </div>
  );
};

export default ListItem;
