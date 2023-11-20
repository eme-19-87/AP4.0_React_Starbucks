import React from 'react';
/**
*Permite mostrar cada una de las opciones en el pie. Es decir, cada item de la columna
*@param {text} opcion -Representa la leyenda de la opción que se mostrará
*
* @param {integer} width - Representa el ancho de la pantalla.
* 
*/
function FooterOptionsList({opcion}){

	return(
		 
			      
			      	<li className="mb-3">
			      		<a href="" className="opcion">{opcion}</a>
			      	</li>

	)


}

export default FooterOptionsList;