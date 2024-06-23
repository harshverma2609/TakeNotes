
import React from "react";

function SearchBar() {
  return (
    <div className="searchBar">
        <div id="searchBox">
            <input id="searchText" type="text" placeholder="Search Note Here..."/>
            <img src={require("./images/search Icon.png")} alt="search icon" />
        </div>
    </div>
  );
}

export default SearchBar;
