import React from "react";
import HeaderButton from "./headerButton/headerButton";
import "./header.css";
import logo from "../../assets/ico/logo.svg";

const buttonList = [
  {
    name: "MENU",
    link: "menu",
    customCss: "",
    img: "",
  },
 
  {
    name: "COFFEE",
    link: "coffee",
    customCss: "",
    img: "",
  },
  
  {
    name: "EXPERIENCIA",
    link: "experiencia",
    customCss: "",
    img: "",
  },
  {
    name: "Localizar tienda",
    link: "localizar",
    customCss: "header__button--right",
    img: "",
  },
];

function Header() {
  return (
    <header className="ms-5 me-5 ">
   <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <img src={logo} alt="Logo Starbuck" className="me-5"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex header__container">
        {buttonList.map((aButton) => {
              return <HeaderButton data={aButton} />;
            })}
      </ul>
      
    </div>
  </div>
</nav>
    </header>
  );
}

export default Header;

/*
<nav>
       
        <div className="wrapper navbar navbar-expand-lg ">
         
          <ul className="header__container ">
            {buttonList.map((aButton) => {
              return <HeaderButton data={aButton} />;
            })}
          </ul>
        </div>
      </nav>

*/