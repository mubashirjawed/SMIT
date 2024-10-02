import React from "react";
import Home from "./components/Home";
import NotFound from "./components/Notfound";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
