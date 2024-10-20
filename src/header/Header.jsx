import React from "react";
import "./header.css";
import headerImg from "../Image/headerImg.jpg";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React </span>
        <span className="headerTitleLg">Blog</span>

      </div>
      <img className="headerImg"
      src={headerImg} alt="" />
    </div>
  );
};

export default Header;