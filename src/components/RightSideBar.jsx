// src/components/RightSidebar.js
import React from "react";
import "./style.css";

const RightSidebar = () => {
  return (
    <div className="rightSidebar">
      <div className="setting">
        <h3>Settings</h3>
      </div>

      <div className="right-sidebar-item">
        <img src="/icon/Language Settings.svg" alt="" />
        <div className="desc">Language Settings</div>
      </div>

      <div className="right-sidebar-item">
        <img src="/icon/Language Settings.svg" alt="" />
        <div className="desc">General Settings</div>
      </div>

      <div className="right-sidebar-item">
        <img src="/icon/Language Settings.svg" alt="" />
        <div className="desc">Font Settings</div>
      </div>

      <div className="right-sidebar-item">
        <img src="/icon/Language Settings.svg" alt="" />
        <div className="desc">Appearance Settings</div>
      </div>

      <div className="night-mode">
        <div className="night-text">Night Mode</div>
        <div className="toogle">
          <div className="circle"></div>
          <div className="cylender"></div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
