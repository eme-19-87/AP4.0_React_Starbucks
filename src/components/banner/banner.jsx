import "./banner.css";
import React from "react";
import BannerMovil from './bannerMovil/bannerMovil';
import BannerImgPart from '../banner/bannerDesktop/bannerImgPart';
import BannerTextPart from '../banner/bannerDesktop/bannerTextPart';
import {useContext} from "react";
import {WindowSizeContext} from "../../App";


/**
*
* Permite colocar el banner cuando se tiene un tamaño móvil
*
* @param {text} title -El texto que se mostrará como título del banner.
* @param {text} subtitle-El texto que se mostrará después del título.
* @param {text} bgColor -El color de fondo del banner.
* @param {text} imagen -La imagen que se mostrará en el banner
* @param {boolean} withButton -Si tiene o no un botón
* @param {text} btnTitle -El texto que se mostrará en el botón
* @return {jsx} -Retorna un componente que mostrarà el banner con la imagen arriba y el texto de bajo para adaptarse a las pantallas
* más pequeñas
*/
function placeCardMovil(imagen, title,subtitle,bgColor,withButton,btnTitle){
  return <BannerMovil imagen={imagen} title={title} subtitle={subtitle} bgColor={bgColor} withButton={withButton}
  btnTitle={btnTitle}/>
}



/**
*
* Permite colocar la parte de la imagen de la tarjeta
*
* @param {text} imagen -La ruta de la imagen.
* @param {text} classImg -La clase que se aplicará. Está en el css del componente.
* @return {jsx} -Retorna el componente que contendrá la imagen que se mostrará en el banner
*/
function placeImgTag(imagen, classImg){
  return <BannerImgPart imagen={imagen} classImg={classImg}/>

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
* @return {jsx} -Retorna el componente que mostrará el texto del banner
*/
function placeTextContainer(title,subtitle,textClass,button,pColor,titleColor,btnTitle){
  return <BannerTextPart title={title} subtitle={subtitle} textClass={textClass} button={button} 
  pColor={pColor} titleColor={titleColor} btnTitle={btnTitle} />
}

/**
*
* Permite colocar la tarjeta según si está volteada o no
*
* @param {text} img -La ruta de la imagen que se mostrará.
* @param {text} title -El texto que se mostrará como título del banner.
* @param {text} subtitle -El texto que se mostrará después del título.
* @param {boolean} flip -Determina si la imagen se muestra a la izquierda o derecha.
* Por defecto, el valor true implica que estará a la izquierda.
* @param {boolean} button -True si el banner tiene botón.
* @param {text} bgColor -El color de fondo del banner.
* @param {text} pColor -El color del texto que viene después del título.
* @param {text} titleColor-El color del texto del título.
* @param {text} claseImg-La clase que se aplicará a la tarjeta. 
* Se encuentra en el css del componente.
* @param {text} textClass-La clase que se aplicará al texto de la tarjeta. 
* También se encuentra en el css del componente.
*/
function placeCard(img,claseImg,title,subtitle,textClass,flip,button,bgColor,pColor,titleColor,btnTitle){
  return(
    <div className="container mt-3 mb-2">
    <div className="card mb-3 banner__card"
    style={{
        backgroundColor:`${bgColor}`
      }}>
          <div className="row">
        {/*Dependiendo el valor de flip, devuelvo primero la etiqueta de la imagen o primero la etiqueta de la tarjeta.
        Con bootstrap, el que va primero es el que se muestra a la izquierda y el que va segundo es el que se muestra a la derecha
        usando la clase card. */}    
        {flip ? placeImgTag(img,claseImg):placeTextContainer(title,subtitle,textClass,button,pColor,titleColor,btnTitle)}
        {!flip ? placeImgTag(img,claseImg) : placeTextContainer(title,subtitle,textClass,button,pColor,titleColor,btnTitle)}
    
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
* @param {text} title -El texto que se mostrará como título del banner.
* @param {text} subtitle -El texto que se mostrará después del título.
* @param {boolean} flip -Determina si la imagen se muestra a la izquierda o derecha.
* Por defecto, el valor true implica que estará a la izquierda.
* @param {boolean} button -True si el banner tiene botón.
* @param {text} bgColor -El color de fondo del banner.
* @param {text} pColor -El color del texto que viene después del título.
* @param {text} titleColor-El color del texto del título.
* @param {text} btnTitle -El texto que se mostrará en el botón
*/
function Banner({data:{img,title,subtitle,flip,button,bgColor,pColor,titleColor,btnTitle}}){
    const width=useContext(WindowSizeContext);
    if(width>=980){
       return placeCard(img,"img__desktop",title,subtitle,"",flip,button,bgColor,pColor,titleColor,btnTitle);
    } else{
      return placeCardMovil(img,title,subtitle,bgColor,button,btnTitle);
    }
 
  
}

export default Banner;

