"use client";

async function myList() {
  let Data = fetch("https://jsonplaceholder.typicode.com/users");
  Data = await Data.json();
  return Data;
}

const LoadingData = () => {

    return (
    <>
      <h2>Loading Data </h2>
    </>
  );
};

export default LoadingData;
