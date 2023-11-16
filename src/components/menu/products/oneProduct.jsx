import React from 'react';
import Prod1 from "../../../assets/producto1.png";
import "./products.css";

function OneProduct({data:{img,name}}){
  return (
  <div class="col-lg-4 col-sm-2 col-md-2">
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