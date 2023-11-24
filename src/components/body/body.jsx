import React from 'react';
import {useContext} from "react";
import {ThemeContext,WindowSizeContext} from "../../App";
import Banner from '../banner/banner';
import Frapu from "../../assets/frapuccino.png";
import Mochila from "../../assets/mochila.png";

/**
*Los datos que se mostrarán en el cuerpo principal de la página
*
* @param {text} img -La ruta de laimagen que se mostrará en el banner.
* @param {text} titulo -El título del banner.
* @param {text} subtitulo -El texto que le sigue al título en el banner.
* @param {boolean} flip -Determina si la imagen está a la izquierda o derecha
* @param {boolean} conBotón -Determina si el banner tiene o no un botón
* @param {text} bgColor - El color de fondo del banner
* @param {text} pColor -El color de los subtítulos de los banners
* @param {text} titleColor -El color del título del banner
* @param {text} btnTitle -La leyenda que aparecerá en el botón
* 
*/
const dataBody=[
	{
		img:Frapu,
		titulo:"Punkinlicius",
		subtitulo:"Una temporada con tu favorito de siempre. ¡Nuestro Pumpkin Spice vuelve por tiempo limitado en sus versiones Iced, Latte y Frappuccino!",
		flip:true,
		conBoton:false,
		bgColor:"#fd7e14",
		pColor:"#fff",
		titleColor:"#fff"
		
		
	},

	{
		img:Mochila,
		titulo:"Unite a algo más grande",
		subtitulo:"Revisa las oportunidades que tenemos para vos",
		flip:false,
		conBoton:true,
		bgColor:"#d4e9e2",
		pColor:"#00754a",
		titleColor:"#00754a",
		btnTitulo:"Postúlate acá"
		


	}

]
function Body(){
	    const width=useContext(WindowSizeContext);
		return(

			dataBody.map(dato=>{
		return <Banner data={dato}/>
	})
	)
	

}

export default Body;