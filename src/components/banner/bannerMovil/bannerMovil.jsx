import React from "react";
import Button from '../../button/button';
/**
*
* Permite colocar el botón en la tarjeta, si es que esta lo lleva.
*@param {text} btnTitulo -Representa el texto que se mostrará en el botón
*
*
*/
function placeButton(btnTitulo){
    return <Button titulo={btnTitulo} theme="ligth"/>
    
  }

/**
*
* Permite colocar el banner cuando se tiene un tamaño móvil
*
* @param {text} titulo -El texto que se mostrará como título del banner.
* @param {text} subtítulo -El texto que se mostrará después del título.
* @param {text} bgColor -El color de fondo del banner.
* @param {text} imagen -La imagen que se mostrará en el banner
* @return {jsx} -Retorna un componente que mostrarà el banner con la imagen arriba y el texto de bajo para adaptarse a las pantallas
* más pequeñas
*/
function BannerMovil({imagen, titulo,subtitulo,bgColor,withButton,btnTitle}){
    return (
        <div className="container mt-3 mb-2">
        <div className="row">
          <div className="col-12" >
           <div className="card">
            <img src={imagen} className="card-img-top" alt="..."/>
            <div className="card-body"  style={{
            backgroundColor:`${bgColor}`
          }}>
              <h3 className="card-title text-center wrapper">{titulo}</h3>
              <p className="text-center">
                {subtitulo}
              </p>
              {withButton?placeButton(btnTitle):null}
            </div>
            
          </div>
       </div>
      
        </div>
        </div>
       
       
    
      
      )
}

export default BannerMovil;