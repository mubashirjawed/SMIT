import React from "react";

const SingleQuote = async ({ params }) => {
  let singleQuote = await fetch(`https://dummyjson.com/quotes/${params.id}`);
  singleQuote = await singleQuote.json();

  return (
    <div className="p-10">
      <h1 className="text-center text-5xl font-mono my-5">
        {singleQuote.quote}
      </h1>
      <h1 className="font-thin text-center text-2xl">
        Quote By
        <span className="underline font-bold"> {singleQuote.author}</span>
      </h1>
    </div>
  );
};

export default SingleQuote;
