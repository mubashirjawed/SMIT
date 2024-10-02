import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Bloodform from "./components/Bloodform";
import BloodList from "./components/BloodList";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blood-form" element={<Bloodform />} />
            <Route path="/blood-list" element={<BloodList />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
