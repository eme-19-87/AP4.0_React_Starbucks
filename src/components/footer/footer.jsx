import React from "react";
import FooterOptions from "./footerOptions/footerOptions";
import FooterSocialNet from "./footerContact/footerSocialNet";
import FooterContactOptions from "./footerContact/footerContactOptions";
import Copyrigth from "./copyrigth/copyrigth";
//import useScreenSize from '../../hooks/useScreenSize.js'

/**
*Permite mostrar el footer con todas las opciones: columna de opciones, redes sociales,
*detalles sobre el copyrigth y contactos
*
* @param {integer} width - Representa el ancho de la pantalla. Usado para definir
*el formato con el cual se mostrará el pie.
* 
*/
function Footer(){
	
	return (
		<footer className="mt-5">
			<FooterOptions/>
			<FooterSocialNet/>
			<FooterContactOptions/>
			<Copyrigth/>
		</footer>

   );
}

export default Footer;