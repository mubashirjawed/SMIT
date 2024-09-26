import AuthContextProvider from "@/lib/contexts/AuthContext";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <AuthContextProvider>{children}</AuthContextProvider>
    </>
  );
};

export default layout;
