import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
