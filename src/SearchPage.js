import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
    </div>
  );
};

export default SearchPage;
