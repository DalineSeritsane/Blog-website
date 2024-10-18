import React from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="navLeft">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-square-twitter"></i>
        <i className="fa-brands fa-square-pinterest"></i>
        <i className="fa-brands fa-square-instagram"></i>
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
         src="https://www.pexels.com/photo/pretty-woman-in-white-tank-top-smiling-6706847/"
        alt=''></img>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Navbar
