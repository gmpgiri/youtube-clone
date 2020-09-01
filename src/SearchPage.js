import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJxuvwdB2H7bQQyQk8Aqu28rYXWmz_WJWjbwgcBD=s900-c-k-c0xffffffff-no-rj-mo"
        channel="MKBHD"
        verified
        subs="10M"
        noOfVideos={2044}
        description="Technology videos"
      />
      <hr />
      <VideoRow
        title="Learn to Code in 3 Months"
        views="1.4M"
        subs="2.5M"
        image="https://i.ytimg.com/vi/h-bBfLc0Xto/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBaQpc9R8KOxp7psnUvCmwOGSSOMQ"
        channel="Clever Programmers"
        description="Learn who to code by Qazi and Sonny"
        timestamp="3 days ago"
      />
      <VideoRow
        title="Learn to Code in 3 Months"
        views="1.4M"
        subs="2.5M"
        image="https://i.ytimg.com/vi/h-bBfLc0Xto/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBaQpc9R8KOxp7psnUvCmwOGSSOMQ"
        channel="Clever Programmers"
        description="Learn who to code by Qazi and Sonny"
        timestamp="3 days ago"
      />
      <VideoRow
        title="Learn to Code in 3 Months"
        views="1.4M"
        subs="2.5M"
        image="https://i.ytimg.com/vi/h-bBfLc0Xto/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBaQpc9R8KOxp7psnUvCmwOGSSOMQ"
        channel="Clever Programmers"
        description="Learn who to code by Qazi and Sonny"
        timestamp="3 days ago"
      />
    </div>
  );
};

export default SearchPage;
