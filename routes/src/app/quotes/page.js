import React from "react";

export const metadata = {
  title: "Quotes",
};

const Quotes = async () => {
  let quotes = await fetch("https://dummyjson.com/quotes");
  quotes = await quotes.json();
  
  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl text-center">Quotes</h1>
    </div>
  );
};

export default Quotes;
