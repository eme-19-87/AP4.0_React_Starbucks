import "./banner.css";
import React from "react";
import {useContext} from "react";
import {WindowSizeContext} from "../../App";



function placeCardMovil(imagen, titulo,subtitulo,bgColor){
  return (
    <div className="container mt-3 mb-2">
    <div className="row">
      <div className="col-12" >
       <div className="card">
        <img src={imagen} className="card-img-top" alt="..."/>
        <div className="card-body"  style={{
        backgroundColor:`${bgColor}`
      }}>
          <h3 className="card-title">{titulo}</h3>
          <p>
            {subtitulo}
          </p>
        </div>
      </div>
   </div>
    
    </div>
    </div>
   
   

  
  )
}

/**
*
* Permite colocar el botón en la tarjeta, si es que esta lo lleva.
*@param {text} btnTitulo -Representa el texto que se mostrará en el botón
*
*
*/
function placeButton(btnTitulo){
  return(
    <div className="d-flex justify-content-center">
      <button type="button" className="btn">{btnTitulo}</button>
    </div>
    
    )
  
}

/**
*
* Permite colocar la parte de la imagen de la tarjeta
*
* @param {text} imagen -La ruta de la imagen.
* @param {text} clase -La clase que se aplicará. Está en el css del componente.
*/
function placeImgTag(imagen, clase){
  return (
      <div className="col-6">
             <img src={imagen} className={`${clase} img-fluid rounded-start `} alt="..."/>
            </div>

  )

}

/**
*
* Permite colocar la parte del texto de la tarjeta
*
* @param {text} titulo -El texto que se mostrará como título del banner.
* @param {text} clase -La clase que se aplicará al texto. En el css del componente
* @param {text} subtítulo -El texto que se mostrará después del título.
* @param {text} bgColor -El color de fondo del banner.
* @param {text} pColor -El color del texto que viene después del título.
* @param {text} titleColor-El color del texto del título.
*/
function placeTextContainer(titulo,subtitulo,clase,conBoton,pColor,titleColor,btnTitulo){

  return(
    <div className={`col-6 ${clase}`}>
      <h2
      style={{
        color:`${titleColor}`
      }}>
        {titulo}
      </h2>

      <div className="card-body">

        <p className="card-text"
        style={{
        color:`${pColor}`
      }}>
        {subtitulo}
      </p>

        {conBoton?placeButton(btnTitulo):null}
      </div>
    </div>

  )
}

/**
*
* Permite colocar la tarjeta según si está volteada o no
*
* @param {text} img -La ruta de la imagen que se mostrará.
* @param {text} titulo -El texto que se mostrará como título del banner.
* @param {text} subtítulo -El texto que se mostrará después del título.
* @param {boolean} flip -Determina si la imagen se muestra a la izquierda o derecha.
* Por defecto, el valor true implica que estará a la izquierda.
* @param {boolean} conBoton -True si el banner tiene botón.
* @param {text} bgColor -El color de fondo del banner.
* @param {text} pColor -El color del texto que viene después del título.
* @param {text} titleColor-El color del texto del título.
* @param {text} claseImg-La clase que se aplicará a la tarjeta. 
* Se encuentra en el css del componente.
* @param {text} claseTexto-La clase que se aplicará al texto de la tarjeta. 
* También se encuentra en el css del componente.
*/
function placeCard(img,claseImg,titulo,subtitulo,claseTexto,flip,conBoton,bgColor,pColor,titleColor,btnTitulo){
  return(
    <div className="container mt-3 mb-2">
    <div className="card mb-3 drink__card"
    style={{
        backgroundColor:`${bgColor}`
      }}>
          <div className="row">
        {flip ? placeImgTag(img,claseImg):placeTextContainer(titulo,subtitulo,claseTexto,conBoton,pColor,titleColor,btnTitulo)}
        {!flip ? placeImgTag(img,claseImg) : placeTextContainer(titulo,subtitulo,claseTexto,conBoton,pColor,titleColor,btnTitulo)}
    
          </div>
       </div>
       </div>
  )

}

/**
*
* Permite mostrar el banner que, a fines prácticos, es una tarjeta modificada de
* bootstrap
*
* @param {text} img -La ruta de la imagen que se mostrará.
* @param {text} titulo -El texto que se mostrará como título del banner.
* @param {text} subtítulo -El texto que se mostrará después del título.
* @param {boolean} flip -Determina si la imagen se muestra a la izquierda o derecha.
* Por defecto, el valor true implica que estará a la izquierda.
* @param {boolean} conBoton -True si el banner tiene botón.
* @param {text} bgColor -El color de fondo del banner.
* @param {text} pColor -El color del texto que viene después del título.
* @param {text} titleColor-El color del texto del título.
*/
function Banner({data:{img,titulo,subtitulo,flip,conBoton,bgColor,pColor,titleColor,btnTitulo}}){
    const width=useContext(WindowSizeContext);
    if(width>730){
       return placeCard(img,"img__desktop",titulo,subtitulo,"drink__body",flip,conBoton,bgColor,pColor,titleColor,btnTitulo);
    } else{
      return placeCardMovil(img,titulo,subtitulo,bgColor);
    }
 
  
}

export default Banner;

