import React, {useContext} from 'react';
import {AppContext} from '../../App';
import Products from './products/products';


/**
*
* Muestra el menú con los productos a la venta
*/
function Menu(){

	const {prodState}=useContext(AppContext);
	const products=prodState;
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