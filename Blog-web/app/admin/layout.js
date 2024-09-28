import AuthContextProvider from "@/lib/contexts/AuthContext";
import { Sidebar } from "./components/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <AuthContextProvider>
        <section className="flex">
          <Sidebar />
          {children}
        </section>
      </AuthContextProvider>
    </>
  );
};

export default layout;
