"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import "./style.css";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div
        className={`${
          !isSidebarOpen ? "hamburger-menu" : "hamburger-menu-hide"
        }`}
        onClick={handleSidebarToggle}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
    </div>
  );
};

export default Page;
