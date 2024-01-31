import React, { useState } from "react";
import "./navbar.scss";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [handleNabvar, setHandleNavbar] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        {/* <img
          src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png"
          alt="menu-icon"
          className="menu-icon"
          height="40px"
          width={"40px"}
        /> */}
        <div className="menu" onClick={() => setHandleNavbar(!handleNabvar)}>
          {handleNabvar ? (
            <IoCloseSharp size={45} />
          ) : (
            <FiMenu className="menu-icon" size={45} />
          )}
        </div>
        <img
          src="https://logowik.com/content/uploads/images/bmc-software8733.jpg"
          alt="bmc-logo"
          height="90px"
          width={"140px"}
        />
      </div>

      <div className={handleNabvar ?'options active' :"options" }>
        <span>Free Trials & demo</span>
        <span className="bar">|</span>
        <span>Get pricing</span>
        <span className="bar">|</span>
        <span>Contact BMC</span>
      </div>
    </div>
  );
};

export default Navbar;
