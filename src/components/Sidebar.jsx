import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src="/icon/logo.svg" alt="" />
      </div>
      <div className="middle">
        <div className="item">
          <img src="/icon/home-icon.svg" alt="" />
        </div>
        <div className="item">
          <img src="/icon/All Duas.svg" alt="" />
        </div>
        <div className="item">
          <img src="/icon/Memorize.svg" alt="" />
        </div>
        <div className="item">
          <img src="/icon/Bookmark.svg" alt="" />
        </div>
        <div className="item">
          <img src="/icon/Ruqyah.svg" alt="" />
        </div>
        <div className="item">
          <img src="/icon/Dua Q&A.svg" alt="" />
        </div>
        <div className="item">
          <img src="/icon/Book.svg" alt="" />
        </div>
      </div>
      <div className="bottom">
        <img src="/icon/I want to support.svg" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
