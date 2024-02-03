import React from "react";
import "./style.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="left">
        <h3>Duas Page</h3>
      </div>
      <div className="right">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by dua name"
          />
          <div className="serach-img">
            <img src="/icon/Search Icon.svg" alt="" />
          </div>
        </div>

        <div className="profile-container">
          <img src="/icon/Profile Icon.svg" alt="" />
          <img src="/icon/DropDown Icon.svg" className="dropdown" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
