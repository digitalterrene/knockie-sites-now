"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function RootPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const knockie_sites_server = "https://knockie-sites-server-bay.vercel.app";
  const search = searchParams.get("q");

  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState(search || "");
  const [websites, setWebsites] = useState([]);

  const fetchWebsites = async (query) => {
    const res = await fetch(
      `${knockie_sites_server}/websites/fetch-websites/name/${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
        mode: "cors",
      }
    );
    const json = await res.json();
    if (res.ok) {
      setWebsites(json);
    } else {
      setWebsites([]);
    }
  };

  useEffect(() => {
    // Fetch initial results when component mounts or search query changes
    fetchWebsites(searchValue);
  }, [searchValue]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    // Trigger search on Enter key press
    if (e.key === "Enter") {
      e.preventDefault();
      // Update the URL with the search query
      router.push(`/search/?q=${searchValue.replaceAll(" ", "-")}`);
    }
  };

  return (
    <div>
      <div className="mx-auto w-fit mt-32   lg:px-20 p-4">
        <img className=" w-60" src="/icons/logo.png" />
        <p className="ml-20 -mt-4 text-gray-400 text-sm">
          The search of the future
        </p>
      </div>
      <form className="w-full px-4 lg:px-0  ">
        <input
          type="text"
          name="search-query"
          value={searchValue}
          required
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="py-3 px-4 block w-full lg:w-3/6 mx-auto border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="Search here"
        />
      </form>

      <a
        href="/add-your-website"
        className=" flex py-4 mx-auto w-fit justify-center"
      >
        <button
          type="button"
          className="py-3   mx-auto px-4  items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Add Your Website
        </button>
      </a>
    </div>
  );
}
