"use client";
import { useEffect, useState } from "react";
import Loader from "./loader";

async function myList() {
  let Data = fetch("https://jsonplaceholder.typicode.com/users");
  Data = await Data.json();
  return Data;
}

const LoadingData = () => {
  const [Users, setUsers] = useState();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let fetchDataUsers = await myList();
      setUsers(fetchDataUsers);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2 className="t">Loading Data </h2>
      {Loading ? (
        <Loader />
      ) : (
        Users.map((user, i) => <h3 key={i}>Name: {user.name}</h3>)
      )}
    </>
  );
};

export default LoadingData;
