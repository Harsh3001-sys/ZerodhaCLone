import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./Menu.css";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3002/me", {
      withCredentials: true,
    }).then((res) => {
      setUser(res.data);
    });
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const getInitials = (name) => {
    if (!name) return "U";
    const words = name.split(" ");
    return words.map((w) => w[0]).join("").toUpperCase().slice(0, 2);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3002/logout",
        {},
        { withCredentials: true }
      );

      window.location.href = "http://localhost:3000/login";
    } catch (err) {
      console.log(err);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
          {/* <li>
            <p className={menuClass}
              onClick={handleLogout}
              style={{ cursor: "pointer" }}>
              Logout
            </p>

          </li> */}
        </ul>
        <hr />
        <div className="profile" onClick={() => handleProfileClick()}>
          <div className="avatar">{getInitials(user?.username)}</div>
          <p className="username">{user?.username || "User"}</p>
          {isProfileDropdownOpen && (
            <div className="dropdown">
              <p className="dropdown-item">
                {user?.email}
              </p>

              <hr />

              <p className="dropdown-item logout" onClick={handleLogout}>
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
