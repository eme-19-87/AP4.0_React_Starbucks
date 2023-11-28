import React from 'react';

import Banner from '../banner/banner';
import Frapu from "../../assets/frapuccino.png";
import Mochila from "../../assets/mochila.png";

/**
*Los datos que se mostrarán en el cuerpo principal de la página
*
* @param {text} img -La ruta de laimagen que se mostrará en el banner.
* @param {text} title -El título del banner.
* @param {text} subtitle -El texto que le sigue al título en el banner.
* @param {boolean} flip -Determina si la imagen está a la izquierda o derecha
* @param {boolean} button -Determina si el banner tiene o no un botón
* @param {text} bgColor - El color de fondo del banner
* @param {text} pColor -El color de los subtítulos de los banners
* @param {text} titleColor -El color del título del banner
* @param {text} btnTitle -La leyenda que aparecerá en el botón
* 
*/
const dataBody=[
	{
		img:Frapu,
		title:"Punkinlicius",
		subtitle:"Una temporada con tu favorito de siempre. ¡Nuestro Pumpkin Spice vuelve por tiempo limitado en sus versiones Iced, Latte y Frappuccino!",
		flip:true,
		button:false,
		bgColor:"#fd7e14",
		pColor:"#fff",
		titleColor:"#fff"
		
		
	},

	{
		img:Mochila,
		title:"Unite a algo más grande",
		subtitle:"Revisa las oportunidades que tenemos para vos",
		flip:false,
		button:true,
		bgColor:"#d4e9e2",
		pColor:"#00754a",
		titleColor:"#00754a",
		btnTitle:"Postúlate acá"
		


	}

];

/**
*Mostará los elementos de la página principal
*
* @return {jsx} -Retorna los componentes que se mostrarán en la pantalla principal de la página
* 
*/
function Body(){
	document.title="Home";
		
		return(

			dataBody.map((dato,index)=>{
		return <Banner data={dato} key={index} />
	    })
	)
	

}

export default Body;