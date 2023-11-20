import React from 'react';
import Prod1 from "../../../assets/producto1.png";
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
  <div class="col-lg-4 col-sm-12 col-md-4">
  <div class="card radius__card">
    
    <div class="card-body">
    <div>
    	<img src={img} class="card-img-top" alt="..."/>
    </div>
      
    </div>
    
  </div>
    <div class="card-footer mt-3">
    <h5 class="text-center">{name}</h5>
  </div>
  </div>

 
  		
  		



  	)

}

export default OneProduct;