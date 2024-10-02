"use client";
import React, { useState } from "react";

const Todo = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandle = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(desc);

    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  let renderTask = (
    <h2 className="flex items-center justify-center p-4 bg-slate-200">
      No Task Available
    </h2>
  );

  const deleteHandle = (i) => {
    let Delete = [...mainTask];
    Delete.splice(i, 1);
    setmainTask(Delete);
  };

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li
          key={i}
          className="flex items-center justify-between my-2 p-4 bg-slate-200"
        >
          <div className=" w-2/3 flex items-center justify-between">
            <h4 className="text-2xl font-semibold">{t.title}</h4>
            <h5 className="text-lg font-md">{t.desc}</h5>
          </div>
          <button
            className="bg-red-400 px-4 py-2 rounded font-bold text-white"
            onClick={() => {
              deleteHandle(i);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white font-bold text-5xl text-center p-5">
        Todo List
      </h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          className="text-2xl border-zinc-700 border-4 m-8 px-4 py-2"
          placeholder="Enter Task here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-700 border-4 m-8 px-4 py-2"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>

      <hr />

      <div className="">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Todo;
