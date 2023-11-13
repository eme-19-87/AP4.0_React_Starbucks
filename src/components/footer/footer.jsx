import React from "react";
import FooterOptions from "./footerOptions/footerOptions";
import useScreenSize from '../../hooks/useScreenSize.js'

function Footer(){
	let { width}=useScreenSize();
	//alert(width);
	return (
		<footer>
			<FooterOptions ancho={width} />

		</footer>

   )
}

export default Footer;