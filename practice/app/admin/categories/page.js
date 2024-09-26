import { CirclePlus } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <main className="p-6 w-full">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">categories</h1>
        <button className="flex gap-2 items-center bg-blue-500 px-4 py-2 text-white rounded-full font-bold">
          <CirclePlus />
          Add
        </button>
      </div>
    </main>
  );
};

export default page;
