import React from "react";
import "../Body/Body.css";
import { SlUserFollow } from "react-icons/sl";
import { MdHideSource } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { MdComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { IoHeartDislikeSharp } from "react-icons/io5";
import { SlUserUnfollow } from "react-icons/sl";
const Body = () => {
  return (
    <div className="body">
      <div className="leeter-card">
        <div className="card-header">
          <div className="header-first"><img src="vite.svg" alt="" />
          <h4>ivpankaj</h4></div>
          <div className="header-button">
            <button><SlUserFollow/></button><button><MdHideSource/></button>
          </div>
        </div>
        <div className="card-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
            officiis. Esse eos earum, facere numquam eligendi natus ratione.
            Pariatur vel quibusdam porro! Architecto sint eveniet quisquam
            ratione alias qui placeat excepturi perferendis ex dolor obcaecati
            voluptate eaque iure laborum animi, et ut, magni culpa laudantium
            reiciendis id eum praesentium quibusdam. Nemo obcaecati earum
            aliquam.
          </p>
        </div>
        <div className="card-footer">
            <button><FcLike/></button><button><MdComment/></button><button><FaShare/></button>
        </div>
      </div>
      <div className="upload-card">
        <div className="image">
          <img src="vite.svg" alt="" />
          <h1>Pankaj</h1>
        </div>
        <div className="write">
          <input type="text" placeholder="write your leeter" />
          <button><FaUpload/></button>
        </div>
        <div className="footer">
          <h5>Date</h5>
        </div>
      </div>
    </div>
  );
};

export default Body;
