import React from 'react';
import Banner from '../banner/banner';
//import {useContext} from "react";
//import {ThemeContext} from "../../App";
import BannerTitle from '../bannerTitle/bannerTitle';
import Banner3 from "../../assets/img/banner_3.png";
import Banner4 from "../../assets/img/banner_4.png";
import Banner5 from "../../assets/img/banner_5.png";

/**
*
* Los datos que se mostrarán en la pestaña experiencia
*
* @param {arrayt} dataBody -El conjunto de datos de las diversas tarjetas con información en la pestaña experiencias
* @param {text} title -El título que tendrá la tarjeta
* @param {text} subtitle-El texto que se mostrará después del título.
* @param {boolean} flip -Define la orientación de la imagen en la tarjeta.
* @param {boolean} button-Define si la tarjeta posee o no un botón.
* @param {text} bgColor-El color de fondo de la tarjeta.
* @param {text} titleColor-El color del texto del título.
*/

const dataBody=[
	{
		img:Banner3,
		title:"InStore",
		subtitle:"En nuestras tiendas te esperan nuestros baristas capacitados para ofrecerte una bebida muy especial. El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable.",
		flip:true,
		button:false,
		bgColor:"#d4e9e2",
		pColor:"#000",
		titleColor:"#000"
		
		
	},
	{
		img:Banner4,
		title:"Drive Thru",
		subtitle:"Retirá tu bebida favorita y viví la Experiencia Starbucks sin bajarte del auto.",
		flip:false,
		button:false,
		bgColor:"#d4e9e2",
		pColor:"#000",
		titleColor:"#000"
		
		
	},
	{
		img:Banner5,
		title:"Delivery",
		subtitle:"Los clientes pueden pedir sus bebidas y productos favoritos donde sea que estén con operadores logísticos al servicio como Pedidos Ya.",
		flip:true,
		button:true,
		bgColor:"#d4e9e2",
		pColor:"#000",
		titleColor:"#000",
		btnTitle:"Pedí Delivery"
		
		
	}


];

/**
*
* Componente que mostrará los datos en las tarjetas para la pestaña experiencia

* @return {jsx} -Retorna  los componentes que mostrarán los datos de la experiencia
*/

function Experiencia(){
	document.title="Experiencia"//Notas JH: Es un muy buen detalle que no habia visto a la primera, 
	// investiga acerca de React Helmet, para modificar lo que tengamos en la etiqueta <head>
   return (
	 <>
	 	
		<div>
			<BannerTitle title="Experiencia Starbucks"/>
			
			<div className="text-center p-3 fs-4 text-wrap d-flex justify-content-center">
			<p className="w-50 p-3">
			 Para cada momento hay una forma de vivir la Experiencia Starbucks como vos quieras.
			</p>
			
			</div>
				{dataBody.map(dato=>{
		return <Banner data={dato}/>
			})}
	    </div>
		
	  </>
	  )
}

export default Experiencia;