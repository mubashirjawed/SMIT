// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Navbar } from "./navbar";
import { Banner } from "./banner";
import { Pricing } from "./pricing";
import { About } from "./about";
import { Tools } from "./tools";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Pricing />
      <About />
      <Tools />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/tools" element={<Tools />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
