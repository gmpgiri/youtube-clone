import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Giri Madhan"
          src="data:image/jpeg;base64,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"
        />
      </div>
    </div>
  );
};

export default Header;
