import React from "react";

export default function Home() {
  return (
    <>
      <h1 className="bg-black text-white font-bold text-5xl text-center p-5">
        Todo List
      </h1>
      <form>
        <input
          type="text"
          className="text-2xl border-zinc-700 border-4 m-8 px-4 py-2"
          placeholder="Enter Task here"
        />
        <input
          type="text"
          className="text-2xl border-zinc-700 border-4 m-8 px-4 py-2"
          placeholder="Enter Description here"
        />

        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
    </>
  );
}
