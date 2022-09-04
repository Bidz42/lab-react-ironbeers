import { Link } from "react-router-dom";
import React from "react";
import header from "../assets/header.png";


function Header() {
  return (
    <Link to="/">
      <nav>
        <img src={header} alt="home" style={{ width: "100%", marginBottom: "25px" }} />
      </nav>
    </Link>
  );
}

export default Header;