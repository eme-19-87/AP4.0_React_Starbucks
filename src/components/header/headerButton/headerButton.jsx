import React from "react";
import "./headerButton.css";
import { NavLink } from "react-router-dom";
function HeaderButton({ data: { name, link, customCss, img },mark }) {


  
  return <li className={`nav-item ${customCss} ${mark?"mark__option":null}`}>
  	<NavLink className="color__text" to={link}>{name}</NavLink>

  </li>;
}

export default HeaderButton;
