import React from 'react';
import OneProduct from './oneProduct'

/**
*
* Permite mostrar los productos indicando su categoría y lalista de productos
*
* @param {text} title -Representa el título de la categoría del producto
* @param {array} productList -Representa una lista con los datos del producto
*/
function Products({data:{title, productList}}){
    if(productList.length>0){
		return(
			<>
			<div class="container">
				<hr/>
				<div className="w-75">{title}</div>
					<hr/>
					   <div class="row">
			  
					{productList.map((prod) => {
								  return <OneProduct data={prod} key={prod.name} />;
								})}
					</div>
				</div>
			
			</>
	
		)
	}
	
}

export default Products;