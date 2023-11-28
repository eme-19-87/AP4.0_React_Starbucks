import React from "react";
import Button from '../../button/button';
/**
*
* Permite colocar el botón en la tarjeta, si es que esta lo lleva.
*@param {text} btnTitle -Representa el texto que se mostrará en el botón
*@param {jsx} -Retorna el elemento que mostrará el botón del banner
*
*/
function placeButton(btnTitle){
    return <Button title={btnTitle} theme="ligth"/>
    
  }

/**
*
* Permite colocar el banner cuando se tiene un tamaño móvil
*
* @param {text} title -El texto que se mostrará como título del banner.
* @param {text} subtitle -El texto que se mostrará después del título.
* @param {text} bgColor -El color de fondo del banner.
* @param {text} imagen -La imagen que se mostrará en el banner
* @param {boolean} withButton -Si tiene o no un botón
* @param {text} btnTitle -El texto que se mostrará en el botón
* @return {jsx} -Retorna un componente que mostrarà el banner con la imagen arriba y el texto de bajo para adaptarse a las pantallas
* más pequeñas
*/
function BannerMovil({imagen, title,subtitle,bgColor,withButton,btnTitle}){
    return (
        <div className="container mt-3 mb-2">
        <div className="row">
          <div className="col-12" >
           <div className="card">
            <img src={imagen} className="card-img-top" alt="..."/>
            <div className="card-body"  style={{
            backgroundColor:`${bgColor}`
          }}>
              <h3 className="card-title text-center wrapper">{title}</h3>
              <p className="text-center">
                {subtitle}
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