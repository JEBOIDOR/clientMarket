import React from "react";
import "./TopBar.css";
import SearchBar from "../searchBar/SearchBar.jsx";
import { Icon } from "@iconify/react";
const TopBar = ({ toggleSidebar }) => {
  return (
    <div className="top-bar">
      <img src="./img/2.png" alt="" />

      <SearchBar></SearchBar>
      <button className="hide-sidebar-button" onClick={toggleSidebar}>
        <Icon icon="vaadin:lines" width="1.2em" height="1.2em" />
      </button>
    </div>
  );
};

export default TopBar;
