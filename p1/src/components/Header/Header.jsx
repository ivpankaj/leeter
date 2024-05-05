import React from "react";
import "./Header.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
const Header = () => {
  return (
    <div className="header">
      <ul>
        <button><IoHomeOutline/></button>
        <button><IoMdNotificationsOutline/>
        </button>
        <button><FcAbout/></button>
        <button><img src="vite.svg" alt="" /></button>
      </ul>
    </div>
  );
};

export default Header;
