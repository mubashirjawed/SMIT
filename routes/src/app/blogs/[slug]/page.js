import React from "react";

const BlogDetail = ({ params }) => {
  return (
    <div className="contanier mx-auto text-center p-20">
      <h1 className="border border-purple-300 p-2 px-3 text-center my-1">
        {params.slug}
      </h1>
    </div>
  );
};

export default BlogDetail;
