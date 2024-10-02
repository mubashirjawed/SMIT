import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userid");
    navigate("/login");
  };


  return (
    <div>
      <h1>hello</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
