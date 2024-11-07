"use client";

import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const registerUser = async () => {
    // console.log(name, age);
    let data = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age }),
    });
    data = await data.json();
    console.log(data);
  };

  return (
    <div className="p-10 bg-gray-400 flex flex-col">
      <h2>Register Users</h2>  
      <br />
      <input
        type="text"
        placeholder=" Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder=" Enter your Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default Register;
