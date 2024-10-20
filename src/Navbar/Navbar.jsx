import React from 'react'
import "./Navbar.css";
import profile from "../Image/profile.jpg";

function Navbar() {
  return (
    <div className="nav">
      <div className="navLeft">
        <i className="navIcon fa-brands fa-facebook"></i>
        <i className="navIcon fa-brands fa-square-twitter"></i>
        <i className="navIcon fa-brands fa-square-pinterest"></i>
        <i className="navIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
            <li className="navListItem">HOME</li>
            <li className="navListItem">ABOUT</li>
            <li className="navListItem">CONTACT</li>
            <li className="navListItem">WRITE</li>
            <li className="navListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="navRight">
        <img className="navImg"
         src={profile}  
        alt=''></img>
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Navbar
