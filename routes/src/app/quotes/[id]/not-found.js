import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-gray-500 min-h-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="font-semibold text-3xl text-center">
        Sorry this Quote Not NotFound
      </h1>
      <Link
        href={"/quotes"}
        className="bg-purple-400 p-2 px-4 rounded text-white"
      >
        see all Quote Available
      </Link>
    </div>
  );
};

export default NotFound;
