import React from "react";
import "./Search.css";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  return (
    <div className="search">
      <div className="search_container">
        <input placeholder="Search Products" />
        <BiSearchAlt2 />
      </div>
    </div>
  );
};

export default Search;
