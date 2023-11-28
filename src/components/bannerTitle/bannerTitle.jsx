import React from 'react';
import "./bannerTitle.css";

import {useContext} from "react";
import {ThemeContext} from "../../App";
/**
*
* Componente que permite mostrar los títulos de Coffee, Administrador, Experiencia y Localizar
* @param {text} title -Representa el texto del título que se mostrará
*  @return {jsx} Retorna un objeto jsx que contendrá todos los elementos necesarios para mostrar el título
*/
function BannerTitle({title}){
	const {theme}=useContext(ThemeContext);
	return(
		<div className={`container mt-5 title-bar-${theme}`}>
		<div className="text-center p-3">
			<p className="fs-1 fw-bolder text-ligth">
				{title}
			</p>
		</div>
	    </div>
		
	)
}

export default BannerTitle;