import React, { useState } from "react";
import "./leftsidebar.css";
import { useRouter } from "next/navigation";

const Item = ({ item, filterData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataItems, setDataItems] = useState([]);
  const router = useRouter();

  const apiCall = (type) => {
    fetch(`http://localhost:8086/${type}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (type === "dua") {
          const dua = data?.filter(
            (cat) =>
              cat.subcat_id === item.subcat_id && cat.cat_id === item.cat_id
          );
          setDataItems(dua);
        } else {
          const sub_cat = data?.filter((cat) => cat.cat_id === item.cat_id);
          setDataItems(sub_cat);
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  };

  const handleClick = () => {
    if (item.dua_id) {
      filterData({
        cat_id: item.cat_id,
        subcat_id: item.subcat_id,
        dua_id: item.dua_id,
      });

      const name = item.dua_name_en.replace(/\s/g, "-");

      router.push(
        `/?dua_name=${name}&cat=${item.cat_id}&subcat=${item.subcat_id}&dua=${item.dua_id}`,
        undefined,
        { shallow: true }
      );
    }

    if (item.subcat_id && !item.dua_name_en) {
      apiCall("dua");

      filterData({
        cat_id: item.cat_id,
        subcat_id: item.subcat_id,
      });

      const name = item.subcat_name_en.replace(/\s/g, "-");
      router.push(
        `/?subcat_name=${name}&cat=${item.cat_id}&subcat=${item.subcat_id}`,
        undefined,
        { shallow: true }
      );
    }

    if (item.cat_icon && !item.subcat_id) {
      apiCall("sub_category");

      filterData({
        cat_id: item.cat_id,
      });

      const name = item.cat_name_en.replace(/\s/g, "-");
      router.push(`/?cat_name=${name}&cat=${item.cat_id}`, undefined, {
        shallow: true,
      });
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    handleClick();
  };

  return (
    <ul className={`catergory `}>
      <li className={`sidebar-item`}>
        <div
          className={`content ${isOpen ? "set" : ""}`}
          onClick={handleToggle}
        >
          {item.cat_icon ? <img src="/icon/Category Picture.svg" /> : ""}

          <div>
            <p className="dua_category">
              {item.dua_name_en
                ? "> " + item.dua_name_en
                : item.subcat_id
                ? "-> " + item.subcat_name_en
                : item.cat_name_en}
            </p>
            {!item.subcat_id && (
              <p className="dua_category_subtitle">
                {"Subcategory: " + item.no_of_subcat}
              </p>
            )}
          </div>
        </div>
        {isOpen && dataItems && (
          <ul style={{ marginLeft: 20 }}>
            {dataItems.map((child, i) => (
              <Item key={i} item={child} filterData={filterData} />
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default Item;
