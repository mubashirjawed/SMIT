import { Home, LayoutList, MessageCircleMore } from "lucide-react";
import React from "react";
import LoginButton from "./LoginButton";
import AuthContextProvider from "@/lib/contexts/AuthContext";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-7 py-3 border-b cursor-pointer">
      <img
        className="h-10"
        alt="logo not show"
        src="https://raw.githubusercontent.com/RajendraAVerma/blog_website/refs/heads/master/public/logo.png"
      />
      <ul className="flex gap-8 items-center">
        <li className="flex items-center gap-1">
          <Home />
          Home
        </li>
        <li className="flex items-center gap-1">
          <LayoutList />
          Blogs
        </li>
        <li className="flex items-center gap-1">
          <MessageCircleMore />
          Contact Us
        </li>
      </ul>
      <AuthContextProvider>
        <LoginButton />
      </AuthContextProvider>
    </nav>
  );
};

export default Header;
