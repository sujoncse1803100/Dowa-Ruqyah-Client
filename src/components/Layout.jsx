// src/app/components/Layout.jsx
import React from "react";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <div className="main-content">
        <LeftSidebar />
        <div className="main-section">{children}</div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
