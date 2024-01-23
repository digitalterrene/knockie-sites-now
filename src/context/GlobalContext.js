"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 3000);
  }, [setTimeout(() => {}, 2000)]);

  return (
    <GlobalContext.Provider value={{ appLoading }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
