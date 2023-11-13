"use client";
import React, { useEffect } from "react";
import logo from "@/assets/logo.png";
export default function Navbar() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div className=" px-20 p-4">
      <img className="w-32" src={logo.src} />
    </div>
  );
}
