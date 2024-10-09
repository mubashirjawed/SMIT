"use client";

import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-7xl font-bold text-purple-600 mb-10">Hello</h1>

      <div className="flex gap-8">
        <Link href="/blogs">
          <button className="bg-purple-400 text-white font-semibold px-8 py-2 rounded-xl ">
            blogs
          </button>
        </Link>

        <Link href="/aboutus">
          <button className="bg-purple-400 text-white font-semibold px-8 py-2 rounded-xl ">
            aboutus
          </button>
        </Link>

        <Link href="/contactus">
          <button className="bg-purple-400 text-white font-semibold px-8 py-2 rounded-xl ">
            contactus
          </button>
        </Link>
      </div>
    </div>
  );
}
