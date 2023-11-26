import React from 'react';
import Banner from '../banner/banner';
import {useContext} from "react";
import {ThemeContext} from "../../App";
import BannerTitle from '../bannerTitle/bannerTitle';
import Banner3 from "../../assets/img/banner_3.png";
import Banner4 from "../../assets/img/banner_4.png";
import Banner5 from "../../assets/img/banner_5.png";

const dataBody=[
	{
		img:Banner3,
		titulo:"InStore",
		subtitulo:"En nuestras tiendas te esperan nuestros baristas capacitados para ofrecerte una bebida muy especial. El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable.",
		flip:true,
		conBoton:false,
		bgColor:"#d4e9e2",
		pColor:"#000",
		titleColor:"#000"
		
		
	},
	{
		img:Banner4,
		titulo:"Drive Thru",
		subtitulo:"Retirá tu bebida favorita y viví la Experiencia Starbucks sin bajarte del auto.",
		flip:false,
		conBoton:false,
		bgColor:"#d4e9e2",
		pColor:"#000",
		titleColor:"#000"
		
		
	},
	{
		img:Banner5,
		titulo:"Delivery",
		subtitulo:"Los clientes pueden pedir sus bebidas y productos favoritos donde sea que estén con operadores logísticos al servicio como Pedidos Ya.",
		flip:true,
		conBoton:true,
		bgColor:"#d4e9e2",
		pColor:"#000",
		titleColor:"#000",
		btnTitulo:"Pedí Delivery"
		
		
	}


];

function Experiencia(){
	
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