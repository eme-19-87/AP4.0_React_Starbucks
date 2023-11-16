import React from "react";
import FooterOptions from "./footerOptions/footerOptions";
import FooterSocialNet from "./footerContact/footerSocialNet";
import FooterContactOptions from "./footerContact/footerContactOptions";
import useScreenSize from '../../hooks/useScreenSize.js'

function Footer(){
	let { width}=useScreenSize();
	//alert(width);
	return (
		<footer className="mt-5">
			<FooterOptions ancho={width} />
			<FooterSocialNet />
			<FooterContactOptions ancho={width} />
		</footer>

   )
}

export default Footer;