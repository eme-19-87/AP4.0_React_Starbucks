import React from "react";
import Button from '../../button/button';

/**
*
* Permite colocar el botón en la tarjeta, si es que esta lo lleva.
*@param {text} btnTitulo -Representa el texto que se mostrará en el botón
@return {jsx} -Retorna un componente que mostrará el botón de los distintos banners en la página
*
*
*/
function placeButton(btnTitle){
    return <Button title={btnTitle}/>
    
  }

/**
*
* Permite colocar la parte del texto de la tarjeta
*
* @param {text} title -El texto que se mostrará como título del banner.
* @param {text} textClass -La clase que se aplicará al texto. En el css del componente
* @param {text} subtitle -El texto que se mostrará después del título.
* @param {text} bgColor -El color de fondo del banner.
* @param {text} pColor -El color del texto que viene después del título.
* @param {text} titleColor-El color del texto del título.
* @param {boolean} button -Indica si tendrá o no un botón
* @param {text} btnTitle -El texto que se mostrará en el botón
* @return {jsx} -Retorna un componente que mostrará la parte del texto del banner
*/


function BannerTextPart({title,subtitle,textClass,button,pColor,titleColor,btnTitle}){

    return(
      <div className={`col-6 ${textClass}`}>
        <h2
        style={{
          color:`${titleColor}`
        }}>
          {title}
        </h2>
  
        <div className="card-body">
  
          <p className="card-text"
          style={{
          color:`${pColor}`
        }}>
          {subtitle}
        </p>
  
          {button?placeButton(btnTitle):null}
        </div>
      </div>
  
    )
  }

  export default BannerTextPart;