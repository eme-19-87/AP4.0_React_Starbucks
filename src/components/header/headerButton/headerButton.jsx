import React from "react";
import "./headerButton.css";
function HeaderButton({ data: { name, link, customCss, img } }) {
  /*if (img) {
    return (
      <li className={`header__button ${customCss}`}>
        <img src={img} alt={name} />
      </li>
    );
  }*/

  
  return <li className={`nav-item ${customCss}`}>{name}</li>;
}

export default HeaderButton;
