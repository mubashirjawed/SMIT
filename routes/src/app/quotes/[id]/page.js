import React from "react";

const SingleQuote = async ({ params }) => {
  let SingleQuote = await fetch(`https://dummyjson.com/quotes/${params.id}`);
  SingleQuote = await SingleQuote.json();

  return <div className="p-10">SingleQuote</div>;
};

export default SingleQuote;
