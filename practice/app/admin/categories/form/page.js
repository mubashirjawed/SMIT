"use client";
import React from "react";

const page = () => {
  return (
    <main className="w-full p-6 flex flex-col gap-4">
      <h1 className="font-bold">Category | Form</h1>
      <section className="flex">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col gap-2 bg-blue-50 rounded-xl p-7"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">
              Category Name <span className="text-red-500">*</span>
            </label>
            <input
              className="px-4 py-2 rounded-full border bg-gray-50"
              placeholder="Enter Category Name"
              type="text"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">
              Category Slug <span className="text-red-500">*</span>
            </label>
            <input
              className="px-4 py-2 rounded-full border bg-gray-50"
              placeholder="Enter Category Slug"
              type="text"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">
              Image <span className="text-red-500">*</span>
            </label>
            <input
              className="px-4 py-2 rounded-full border bg-gray-50"
              // placeholder="Enter Category Name"
              type="file"
              accept="image/*"
              onChange={(e) => {
                e.preventDefault();
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 rounded-full px-4 py-2 text-white"
          >
            Create
          </button>
        </form>
      </section>
    </main>
  );
};

export default page;
