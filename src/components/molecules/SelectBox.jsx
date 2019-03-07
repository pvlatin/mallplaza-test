import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faAngleDown,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";

const SelectBox = props => {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    setSelectedItem(props.items && props.items[0]);
  }, []);

  console.log(selectedItem, "selected item");

  const toggleSelect = () => {
    if (showItems) {
      setShowItems(false);
    } else {
      setShowItems(true);
    }
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setShowItems(false);
  };

  console.log(props.items, "props.items from selectbox");
  return (
    <div>
      <div className="select-box" onClick={toggleSelect}>
        <FontAwesomeIcon
          icon={showItems ? faAngleUp : faAngleDown}
          className="icon"
        />
        {selectedItem.value}
      </div>
      <div style={{ display: showItems ? "block" : "none" }}>
        {props.items.map(item => (
          <div
            key={item.id}
            onClick={() => selectItem(item)}
            className={selectedItem === item ? "selected" : ""}>
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectBox;
