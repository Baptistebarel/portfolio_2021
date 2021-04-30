import React from "react";
import {Link} from "react-router-dom";

import "./header.scss"

const Header  = () => {
	return(
		<div className="header">
      <div className="header__logo-container">
        <span className="header__logo-text">B.</span>
      </div>
      <nav className="header__navbar">
        <Link to="/" className="header__navbar__link">Projects</Link>
        <Link to="/about" className="header__navbar__link">About</Link>
      </nav>
		</div>
	)
}

export default Header;