import React, {useContext} from 'react';
import {AppContext} from '../../App';
import Products from './products/products';


/**
*
* Muestra el menú con los productos a la venta
* @return {jsx} -Retorna los componentes que mostrarán los datos de los productos en el menú
*/
function Menu(){
	document.title="Menú";
	const {prodState}=useContext(AppContext);
	const products=prodState;
	return (
	   <>
		<div className="container">
			<h5>¡Disfrútalos!</h5>
			<h2>Conoce nuestras bebidas y alimentos de temporada</h2>
				{products.map(prod=>{
			return <Products data={prod} key={prod.title} />
		    }
		  )}
	    </div>
		
	  </>
	)
}

export default Menu;