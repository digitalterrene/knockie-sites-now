"use client";

import Image from "next/image";
import { useEffect } from "react";
import logo from "@/assets/logo.png";
export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div>
      <div>
        <div className="mx-auto w-fit mt-32 px-20 p-4">
          <img className=" w-60" src={logo.src} />
          <p className="ml-20 -mt-4 text-gray-400 text-sm">
            The search of the future
          </p>
        </div>
        <input
          type="text"
          className="py-3 px-4 block w-3/6 mx-auto border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="Search here"
        ></input>
        <a href="/add-your-website" className=" flex py-4 justify-center">
          <button
            type="button"
            className="py-3   mx-auto px-4  items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Add Your Website
          </button>
        </a>
      </div>
    </div>
  );
}
