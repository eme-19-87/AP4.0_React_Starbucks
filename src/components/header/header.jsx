import React from "react";
import {useContext} from "react";
import {ThemeContext,WindowSizeContext} from "../../App";
import HeaderButton from "./headerButton/headerButton";
import "./header.css";
import logo from "../../assets/ico/logo.svg";
import { NavLink } from "react-router-dom";
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
    name: "Admin",
    link: "admin",
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

const homeData= {
    name: "Home",
    link: "/",
    customCss: "",
    img: ""
  }


/**
*
* Función que permite mostrar las opciones de la cabecera cuando se está en tamaño de escritorio
*
* @param {function} handleClickChangeTheme -Funciòn que controlará el cambio de tema de los banners
* @param {text} Theme-String que define si el tema será claro u oscuro
* @return {jsx} Retorna un objeto jsx que servirá para mostrar la barra de opciones en la cabecera
* 
*/
function headerDesktop(handleClickChangeTheme,theme){
  return (
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex header__container">
        {buttonList.map((aButton) => {
              return <HeaderButton data={aButton} />;
            })}
            <li className="change-theme">
            <a onClick={handleClickChangeTheme}>
              <i className={theme=="ligth"?"bi bi-moon-fill":"bi bi-brightness-high-fill"}></i>
              </a>
            </li>
      </ul>
      
      
    </div>

    );
 
}

/**
*
* Componente que se encargará de mostrar la lista de opciones de la cabecera cuando se está en tamañp móvil. Este menú se mostrará
*mediante una clase que maneja Boostrap denominado offcanvas
*
* @param {function} handleClickChangeTheme -Funciòn que controlará el cambio de tema de los banners
* @param {text} Theme-String que define si el tema será claro u oscuro
* @return {jsx} Retorna un objeto jsx que servirá para mostrar la barra de opciones en la cabecera en tamaño móvil
* 
*/
function headerMobil(handleClickChangeTheme,theme){
          return(
               <>
        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="offcanvas offcanvas-end" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header d-flex justify-content-end">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
            </button>
          </div>
          <div class="offcanvas-body">
            <ul>
                {buttonList.map((aButton) => {
                      return <HeaderButton data={aButton} />;
                    })}
              </ul>
              <li className="ms-5 change-theme">
              <a onClick={handleClickChangeTheme}><i className={theme=="ligth"?"bi bi-moon-fill":"bi bi-brightness-high-fill"}></i></a>
              </li>
          </div>
        </div>
       </>
    )
  
}




/**
*
* Componente que permitirá mostrar la lista de opciones de navegación en la cabecera. Dependiendo el tamaño de la pantalla, mostrará
*una forma de desktop o una forma de móvil para adaptarse al tamaño en cuestión
* 
*/
function Header() {
  const {theme,setTheme}=useContext(ThemeContext);
  const handleClickChangeTheme=()=>{setTheme(theme==="ligth"?"dark":"ligth")};
  const width=useContext(WindowSizeContext);

 return  (
  <header className="ms-5 me-5 ">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
      <NavLink className="color__text" to={homeData.link}>
        <img src={logo} alt="Logo Starbuck" className="me-5"/>


      </NavLink>
        
          {width>=980 ? headerDesktop(handleClickChangeTheme,theme):headerMobil(handleClickChangeTheme,theme)}
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