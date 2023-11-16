import React from 'react';
import OneProduct from './oneProduct'

function Products({data:{title, productList}}){

	return(
		<>
		<div class="container">
			<hr/>
			<div className="w-75">{title}</div>
				<hr/>
		   		<div class="row">
		  
				{productList.map((prod) => {
		                      return <OneProduct data={prod} />;
		                    })}
				</div>
			</div>
        
		</>

	)
}

export default Products;