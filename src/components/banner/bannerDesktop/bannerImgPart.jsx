import React from "react";

/**
*
* Permite colocar la parte de la imagen de la tarjeta
*
* @param {text} imagen -La ruta de la imagen.
* @param {text} classImg -La clase que se aplicará. Está en el css del componente.
* @return {jsx} -Retorna una etiqueta que contendrá la imagen que se mostrará en el banner
*/

function BannerImgPart({imagen, classImg}){
  return (
      <div className="col-6">
             <img src={imagen} className={`${classImg} img-fluid rounded-start `} alt="..."/>
            </div>

  )

}

export default BannerImgPart;