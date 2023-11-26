import React from 'react';
import "./products.css";

/**
*
* Permite mostrar un producto en específico en la pantalla
*
* @param {text} img -Representa la ruta de la imagen del producto
* @param {text} name -Representa el nombre del producto
*/
function OneProduct({data:{img,name}}){
  return (
  <div class="col-lg-4 col-sm-12 col-md-4 product-wrapper">
  <div class="card radius__card">
    
    <div class="card-body text-center">
    <div>
    	<img src={img} class="card-img-top" alt="..."/>
    </div>
      
    </div>
    
  </div>
    <div class="card-footer mt-3 ms-2">
    <h5>{name}</h5>
  </div>
  </div>

 
  		
  		



  	)

}

export default OneProduct;