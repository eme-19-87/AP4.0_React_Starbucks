import React from "react";
import "./headerButton.css";
import { NavLink } from "react-router-dom";
function HeaderButton({ data: { name, link, customCss, img } }) {
  /*if (img) {
    return (
      <li className={`header__button ${customCss}`}>
        <img src={img} alt={name} />
      </li>
    );
  }*/

  
  return <li className={`nav-item ${customCss}`}>
  	<NavLink className="color__text" to={link}>{name}</NavLink>

  </li>;
}

export default HeaderButton;
