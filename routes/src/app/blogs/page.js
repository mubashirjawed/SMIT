import Link from "next/link";
import React from "react";

const page = () => {
  const blogs = [
    {
      id: 1,
      title: "blog number 1",
      slug: "check-number-1",
      description: "check  description number 1",
    },
    {
      id: 2,
      title: "blog number 2",
      slug: "check-number-2",
      description: "check  description number 2",
    },
    {
      id: 3,
      title: "blog number 3",
      slug: "check-number-3",
      description: "check  description number 3",
    },
    {
      id: 4,
      title: "blog number 4",
      slug: "check-number-4",
      description: "check  description number 4",
    },
  ];
  return (
    <div className="contanier mx-auto text-center p-20">
      <h1 className="text-7xl font-bold text-purple-600 mb-10">All Blogs</h1>
      {blogs.map((data) => (
        <Link key={data.id} href={`/blogs/${data.slug}`}>
          <h1 className="border border-purple-300 p-2 px-3 text-center my-1">
            {data.title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default page;
