import React from "react";
import FooterOptionsList from "./footerOptionsList";

/**
*
* Este componente es el que crea cada una de las columnas donde se tendrán las opciones
 * @param {text} cabecera -Representa el título de la cabecera
 * @param {array} opciones -Es la lista de opciones para esa columna
 * @return {jsx} -Retorna un elemento jsx que contendrá una columna de opciones para el pie
*/
function FooterColumnOptions({cabecera,opciones,index}){
	
	let tamanio="col-md-6 col-sm-12";
	if(index%2===0){
		tamanio+=" col-lg-3";
	}else{
		tamanio+=" col-lg-2";
	}
	

	return(
		<div className={tamanio}>
		   
			<ul> 
				<li className="cabecera">
				   {cabecera!=="Datos Fiscales"?cabecera:""}
				</li>
				{opciones.map((op) => {
              return <FooterOptionsList opcion={op} key={op.titulo} />;
            })}
			
			</ul>
		</div>
	)
}

export default FooterColumnOptions;