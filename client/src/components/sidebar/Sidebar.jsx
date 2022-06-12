import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(
        "https://osr-manager-server.herokuapp.com/categories"
      );
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://cdn.dribbble.com/users/15687/screenshots/11402762/media/b8eaf17dcdc71b1da589c3b737185da0.png?compress=1&resize=400x300"
          alt=""
        />
        <p>
          In this web application we have made the research process much more
          easier. Everything is there in one application making OSR Manager
          convient to use with its friendly UI. We beleive this application most
          importantly save time and make tasks more easy and enjoyable.
        </p>
      </div>
    </div>
  );
}
