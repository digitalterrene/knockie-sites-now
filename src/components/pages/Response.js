"use client";
import React, { useEffect } from "react";

export default function Response() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div className="p-20 ">
      <p className=" mb-10">Thank you for submiting your website</p>
      <a
        href="/"
        className="py-3  mx-auto px-4  items-center  text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Go back
      </a>
    </div>
  );
}
