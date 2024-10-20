import React from 'react';
import "./sidebar.css";
import Island from "../Image/Island.jpg";

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT TRAVEL</span>
                <img src={Island} alt='' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit vel quas tempora illum magnam amet modi velit ut sunt praesentium quia veritatis a ab, iusto, inventore assumenda eaque, quasi esse!</p>
            </div>
            <div classsName="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Las Vegas</li>
                <li className="sidebarListItem">Paris</li>
                <li className="sidebarListItem">Body of Water</li>
                <li className="sidebarListItem">Beaches</li>
                <li className="sidebarListItem">Animals</li>
                <li className="sidebarListItem">Hiking in nature</li>
            </ul>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial"></div>
            </div>
        </div>

    )
}

export default Sidebar;