import React from 'react';
import Products from './products/products';
import Bagel from '../../assets/Bagel-Sandwich.png';
import Moneda from '../../assets/Moneda.png';
import Croissant from '../../assets/Croissant-Relleno-Avellana.png';
import Chocolate from '../../assets/Chocolate Caliente.png';
import DulceLeche from '../../assets/Dulce de leche Frapp.png'
import ICM from '../../assets/Iced Caramel Macchiato.png'

const products=[

	{
	title:"Comida",
	productList:[
	{img:Bagel,name:"Sandiwichs y Preparados"},
	 {img:Moneda,name:"Snacks"},
	 {img:Croissant,name:"Bakery"}
	]},
	{title:"Bebidas",
	productList:[
	{img:Chocolate,name:"Chocolate Caliente"},
	 {img:DulceLeche,name:"Frapuccino"},
	 {img:ICM,name:"Cafés Helados"}
	 ]
	
    }



]
function Menu(){




	return (
	   <>
		<div class="ms-5 container">
			<h5>¡Disfrútalos!</h5>
			<h2>Conoce nuestras bebidas y alimentos de temporada</h2>
				{products.map(prod=>{
			return <Products data={prod}/>
		    }
		  )}
	    </div>
		
	  </>
	)
}

export default Menu;