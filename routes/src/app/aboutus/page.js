import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-7xl font-bold text-purple-600 mb-10">About Us</h1>

      <Link href="/aboutus/myself">
        <button className="bg-purple-400 text-white font-semibold px-8 py-2 rounded-xl ">
          myself
        </button>
      </Link>
    </div>
  );
};

export default page;
