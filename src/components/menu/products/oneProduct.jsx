import React from 'react';
import "./products.css";

/**
*
* Permite mostrar un producto en específico en la pantalla
*
* @param {text} img -Representa la ruta de la imagen del producto
* @param {text} name -Representa el nombre del producto
* @return {jsx} -Retorna el componente para mostrar un solo producto
*/
function OneProduct({data:{img,name}}){
  return (
  <div className="col-lg-4 col-sm-6 col-xs-6 col-md-4">
    <div className="d-flex-justify-content-center">
    <div className="card">
    <div className="radius__card">
    <div className="card-body product__bod">
    <div>
    	<img src={img} className="card-img-top" alt="..."/>
    </div>
      
    </div>
    
  </div>
    <div className="card-footer mt-3 ms-2">
    <h5 className="text-center">{name}</h5>
  </div>
    </div>
 
    </div>
  
  </div>

 
  		
  		



  	)

}

export default OneProduct;