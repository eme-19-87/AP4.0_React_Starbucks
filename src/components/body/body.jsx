import React from 'react';
import DrinkBody from './mainBody/drinkBody';
import Frapu from "../../assets/frapuccino.png";
import Mochila from "../../assets/mochila.png";

const dataBody=[
	{
		img:Frapu,
		titulo:"Punkinlicius",
		subtitulo:"Una temporada con tu favorito de siempre. ¡Nuestro Pumpkin Spice vuelve por tiempo limitado en sus versiones Iced, Latte y Frappuccino!",
		flip:true,
		conBoton:false


	},

	{
		img:Mochila,
		titulo:"Unite a algo más grande",
		subtitulo:"Revisa las oportunidades que tenemos para vos",
		flip:false,
		conBoton:true


	}

]
function Body(){
		return(

			dataBody.map(dato=>{
		return <DrinkBody data={dato}/>
	})
	)
	

}

export default Body;