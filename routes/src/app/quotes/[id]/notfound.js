import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5">
      <h1 className="font-semibold text-center">
        Sorry this Quote Not NotFound
      </h1>
      <Link href={"/quotes"}>see all Quote Available</Link>
    </div>
  );
};

export default NotFound;
