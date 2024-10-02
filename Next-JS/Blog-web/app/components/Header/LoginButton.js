"use client";

import { useAuth } from "@/lib/contexts/AuthContext";
import Link from "next/link";

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
      <div className="flex gap-4 items-center">
        <button
          onClick={() => handleLogout()}
          className="flex items-center gap-4 bg-gray-700 text-white px-4 py-2 rounded-full"
        >
          Logout
        </button>
        <Link href={"/admin"}>
          <div className="flex gap-3 rounded-xl bg-blue-100 px-3 py-2">
            <img
              className=" object-cover h-12 w-12 rounded-full"
              src={user?.photoURL}
            />
            <div>
              <p className="font-bold">{user?.displayName}</p>
              <p className=" text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>
        </Link>
      </div>
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
