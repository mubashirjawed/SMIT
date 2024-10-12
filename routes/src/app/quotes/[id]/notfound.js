import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5">
      <h1 className="font-semibold text-center">
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
