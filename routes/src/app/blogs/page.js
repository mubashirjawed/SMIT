import React from "react";

const page = () => {
  const blogs = [
    {
      id: 1,
      title: "blog number 1",
      slug: "check number 1",
      description: "check  description number 1",
    },
    {
      id: 2,
      title: "blog number 2",
      slug: "check number 2",
      description: "check  description number 2",
    },
    {
      id: 3,
      title: "blog number 3",
      slug: "check number 3",
      description: "check  description number 3",
    },
    {
      id: 4,
      title: "blog number 4",
      slug: "check number 4",
      description: "check  description number 4",
    },
  ];
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-7xl font-bold text-purple-600 mb-10">blogs</h1>
    </div>
  );
};

export default page;
