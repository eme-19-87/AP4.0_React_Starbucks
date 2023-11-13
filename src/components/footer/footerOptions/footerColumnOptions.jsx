import React from "react";
import FooterOptionsList from "./footerOptionsList";


function FooterColumnOptions({cabecera,opciones}){
	
	let tamanio="col-md-6 col-sm-12";
	if(cabecera==="Impacto Social" || cabecera==="Experiencia Starbucks"){
		tamanio+=" col-lg-2";
	}else{
		tamanio+=" col-lg-3";
	};

	return(
		<div className={tamanio}>
		   
			<ul> 
				<li className="mb-3 ms-0 cabecera text-regular">
				   {cabecera!=="Datos Fiscales"?cabecera:""}
				</li>
				{opciones.map((op) => {
              return <FooterOptionsList opcion={op}/>;
            })}
			
			</ul>
		</div>
	)
}

export default FooterColumnOptions;