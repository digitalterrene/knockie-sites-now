"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchPage() {
  useEffect(() => {
    import("preline");
  }, []);
  const router = useRouter();
  const searchParams = useSearchParams();
  const knockie_sites_server = "https://knockie-sites-server-bay.vercel.app";
  const search = searchParams.get("q");

  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(search || "");
  const [websites, setWebsites] = useState([]);

  const fetchWebsites = async (query) => {
    setWebsites([]);
    setTimeout(async () => {
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

        setLoading(false);
        // location.reload();
      } else {
        setWebsites([]);
        setLoading(false);
      }
    }, 500);
  };

  useEffect(() => {
    // Fetch initial results when component mounts or search query changes
    fetchWebsites(searchValue);
  }, [search]);

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
    <div className="lg:w-2/3 md-w-full w-full   p-8">
      <div className="flex items-center gap-10">
        <a href="/">
          <img className="w-28" src="icons/logo.png" alt="knockie sites logo" />
        </a>
        <label for="input-email-label" className="sr-only">
          Email
        </label>
        <input
          type="text"
          name="search-query"
          value={searchValue}
          required
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="py-3 px-4 block w-full   mt-1 border-2 border-gray-700 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="Search website"
        ></input>
      </div>
      {/* Tabs section starts here */}
      {!loading && (
        <div className="lg:ml-40 mt-10">
          <div className="border-b  border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
                id="tabs-with-underline-item-1"
                data-hs-tab="#tabs-with-underline-1"
                aria-controls="tabs-with-underline-1"
                role="tab"
              >
                All
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                id="tabs-with-underline-item-2"
                data-hs-tab="#tabs-with-underline-2"
                aria-controls="tabs-with-underline-2"
                role="tab"
              >
                Pictures
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                id="tabs-with-underline-item-3"
                data-hs-tab="#tabs-with-underline-3"
                aria-controls="tabs-with-underline-3"
                role="tab"
              >
                News
              </button>
            </nav>
          </div>

          <div className="mt-3">
            <div
              id="tabs-with-underline-1"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-1"
            >
              <div>
                <div className="  mx-auto py-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="font-bold">Search Results</p>
                    <p>{websites?.length}</p>
                  </div>
                  {websites?.map(({ name, url, description, _id }) => (
                    <div key={_id} className="border rounded-xl p-4">
                      <div className="flex gap-2 items-start">
                        <img
                          className="w-8 h-8"
                          src="https://cdn-icons-png.flaticon.com/128/13970/13970024.png"
                        />
                        <div>
                          <p>{name}</p>
                          <a
                            href={
                              url?.includes("http")
                                ? `${url}`
                                : `https://${url}`
                            }
                            target="blank"
                            className="text-gray-600"
                          >
                            {url}
                          </a>
                          <p className="py-3 text-gray-800">{description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              id="tabs-with-underline-2"
              className="hidden"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-2"
            >
              <p className="text-gray-500 dark:text-gray-400">
                Picture Results section
              </p>
            </div>
            <div
              id="tabs-with-underline-3"
              className="hidden"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-3"
            >
              <p className="text-gray-500 dark:text-gray-400">
                News Results Section
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tabs section ends here */}
    </div>
  );
}
