"use client";

import { useAuth } from "@/lib/contexts/AuthContext";

const LoginButton = () => {
  const { user, isLoading, error, handleSiginWithGoogle, handleLogout } =
    useAuth();

  if (isLoading) {
    return (
      <div>
        <img
          className="h-10"
          src="https://i.pinimg.com/originals/2e/ce/ce/2ececec5431d0a1b7eae4e1acac7c59f.gif"
        />
      </div>
    );
  }

  if (user) {
    return (
      <button
        onClick={() => handleLogout()}
        className="flex items-center gap-3 bg-gray-700 text-white px-4 py-2 rounded-full"
      >
        Logout
      </button>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          handleSiginWithGoogle();
        }}
        className="flex items-center gap-3 bg-gray-700 text-white px-4 py-2 rounded-full"
      >
        <img
          className="h-7"
          src="https://raw.githubusercontent.com/RajendraAVerma/blog_website/refs/heads/master/public/google.png"
        />
        Login with Google
      </button>
    </div>
  );
};

export default LoginButton;
