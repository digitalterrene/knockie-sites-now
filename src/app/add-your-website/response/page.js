import React from "react";

export default function page() {
  return (
    <div className="p-20">
      <p>Thank you for submiting your website</p>
      <a
        href="/"
        className="py-3 mt-10 -ml-3  mx-auto px-4  items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Go back
      </a>
    </div>
  );
}
