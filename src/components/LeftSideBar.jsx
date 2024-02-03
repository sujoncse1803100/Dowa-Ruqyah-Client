import React, { useEffect, useState } from "react";
import "./style.css";
import "./leftsidebar.css";
import Item from "./Item";

const LeftSidebar = ({ filterData, isSidebarOpen, handleCloseButton }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8086/category")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div
      className={`leftSidebar ${
        isSidebarOpen ? "leftSidebarOn" : "isSidebarClose"
      }`}
    >
      {/* <div className={`closeSidebar `} onClick={handleCloseButton}>
        <div className="arrow">{"<---"}</div>
        <div className="text">Close Sidebar</div>
      </div> */}
      <div className="top">
        <div className="title">
          <div className="text">Categories</div>
          <div className="closeSidebar" onClick={handleCloseButton}>
            X
          </div>
        </div>

        <div className="search-container">
          <img src="/icon/Search Icon.svg" alt="" />
          <input
            type="text"
            className="search-input"
            placeholder="Search Categories"
          />
        </div>
      </div>

      <div className="bottom">
        <ul>
          {categories?.map((item, i) => (
            <Item key={i} item={item} filterData={filterData} />
            // <li>Hello</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
