"use client";
import { useEffect, useState } from "react";
import Loader from "./loader";

async function myList() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  data = await data.json();
  return data;
}

const LoadingData = () => {
  const [Users, setUsers] = useState([]);
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
      <h2 className="text-4xl">Loading Data</h2>
      {Loading ? (
        <Loader />
      ) : (
        Users.map((user, i) => <h3 key={i}>Name: {user.username}</h3>)
      )}
    </>
  );
};

export default LoadingData;
