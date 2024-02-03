"use client";
import LeftSidebar from "@/components/LeftSideBar";
import RightSidebar from "@/components/RightSideBar";
import TopBar from "@/components/Topbar";
import "./style.css";
import "./responsive.css";
import Sidebar from "@/components/Sidebar";
import SingleDua from "@/components/SingleDua";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [duas, setDuas] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseButton = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const fetchApi = async (keys) => {
    await fetch("http://localhost:8086/dua")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!keys) {
          setDuas(data);
        } else {
          const filterdDuas = data.filter((dua) => dua.cat_id === keys.cat_id);
          setDuas(filterdDuas);
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const focusOnElement = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      targetElement.focus();
    }
  };

  const filterData = (keys) => {
    if (!keys.dua_id) {
      fetchApi(keys);
    } else {
      const element_id =
        keys.cat_id +
        "" +
        keys.subcat_id +
        "" +
        (keys.dua_id ? keys.dua_id : "1");
      focusOnElement(element_id);
    }
  };

  return (
    <div className="main-section">
      {/* <div
        className={`${isSidebarOpen ? "close-sidebar" : "close-sidebarHide"}`}
        onClick={handleCloseButton}
      >
        Close
      </div> */}
      <Sidebar />
      <div className="main">
        <TopBar />
        <div className="open-sidebar">
          <div
            className={`${!isSidebarOpen ? "hamburger-menu" : ""}`}
            onClick={handleSidebarToggle}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <div>Open sidebar div</div>
        </div>

        <div className="page">
          <LeftSidebar
            filterData={filterData}
            isSidebarOpen={isSidebarOpen}
            handleCloseButton={handleCloseButton}
          />
          <div className="dua-container">
            <div className="heading">
              <span className="ref"> Section:</span> The servant is dependent on
              his Lord
            </div>

            {duas?.map((data, i) => (
              <SingleDua data={data} key={i} />
            ))}
          </div>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
