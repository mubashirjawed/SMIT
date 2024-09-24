"use client";

const LoginButton = () => {
  return (
    <div>
      <button className="flex items-center gap-3 bg-gray-700 text-white px-4 py-2 rounded-full">
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
