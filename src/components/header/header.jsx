import React from "react";
import HeaderButton from "./headerButton/headerButton";
import "./header.css";
import logo from "../../assets/ico/logo.svg";
import { NavLink } from "react-router-dom";
const buttonList = [
   {
    name: "Home",
    link: "/",
    customCss: "",
    img: ""
  },

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


/*Función que retorna la barra de navegación que se mostrará cuando se tenga una
pantalla completa*/
function headerDesktop(){
  return (
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex header__container">
        {buttonList.map((aButton) => {
              return <HeaderButton data={aButton} />;
            })}
      </ul>
      
      
    </div>

    );
 
}

/*Función que retorna los elementos que se mostrarán cuando se tenga una pantalla
de móvil.
Aquí los elementos no se disponen en un navbar horizontal, sino en una clase
que Bootstap llama offcanvas.*/
function headerMobil(){
          return(
               <>
        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
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
          </div>
        </div>
       </>
    )
  
}



/*Función que retorna los elementos comunes a la barra de navegación.
Dependiendo el tamaño de la pantalla, se mostrarán unos elementos u otros.
Los elementos comunes en este caso será el logo de la empresa.*/
function showHeader(ancho){

   return(
    <header className="ms-5 me-5 ">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <img src={logo} alt="Logo Starbuck" className="me-5"/>
            {ancho>450 ? headerDesktop():headerMobil()}
        </div>
      </nav>
    
  </header>
  )
}


/*La función que se exportará, para facilitar el modificar las partes,
lo dividí en 3: showHeader retornará los elementos comunes a la barra dependiendo
si está en movil o en escritorio, headerMobil retornará los elementos que se
mostrarán si se está en tamaño movil o el tamaño que se considere pertinente,
headerDesktop mostará los elementos que se deben ver cuando se están en escritorio.*/
function Header({ancho}) {
 
 return showHeader(ancho);
   
 
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