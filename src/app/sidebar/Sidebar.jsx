// components/Sidebar.js
import styles from "./Sidebar.module.css";
import "./style.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeButton} onClick={onClose}>
        <span className="close-icon">{"<"}</span> Duas Page
      </button>
      {/* Your sidebar content goes here */}
    </div>
  );
};

export default Sidebar;
