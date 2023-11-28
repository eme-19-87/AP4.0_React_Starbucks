import React from "react";
import "./headerButton.css";
import { NavLink } from "react-router-dom";

/**
*
* Componente que permitirá mostrar la lista de opciones de navegación en la cabecera. Dependiendo el tamaño de la pantalla, mostrará
*una forma de desktop o una forma de móvil para adaptarse al tamaño en cuestión
*@param {array} data -Array de objetos javascript con los datos de cada opción de la cabecera
*@param {text} data.name -El nombre que se mostrará en el enlace
*@param {text} data.link -El enlace a donde nos dirigiremos al hacer clic en la opción
*@param {text} data.customCss -Una clase css 
*@param {boolean} mark -Si es verdadero, se mostrará la lìnea verde debajo de las opciones al posar el cursor sobre la opción
* @return {jsx} Retorna un objeto jsx para mostrar la cabecera de opciones de la página según el tamaño de la pantalla
* 
*/
function HeaderButton({ data: { name, link, customCss},mark }) {


  
  return <li className={`nav-item ${customCss} ${mark?"mark__option":null}`}>
  	<NavLink className="color__text" to={link}>{name}</NavLink>

  </li>;
}

export default HeaderButton;
