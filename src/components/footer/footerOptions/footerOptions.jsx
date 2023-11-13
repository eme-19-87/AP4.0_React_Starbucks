import React from "react";
import FooterColumnOptions from "./footerColumnOptions";
import FooterAccordion from './footerAccordion';
import "./footer.css";
import DatosFiscales from "../../../assets/img-data-fiscal.jpg"
const columnas=[
	{
		cabecera:"Sobre Nosotros",
		opciones:["Nuestra Historia","Nuestra Mision","Nuestra Cultura Inclusiva y valores", "Nuestro Café","Historias y novedades","Trabaja con nosotros","Comunicados oficiales"]
	},

	{
		cabecera:"Impacto Social",
		opciones:["Planeta","Personas"]
	},

	{
		cabecera:"Atención al Cliente",
		opciones:["Contacto","Medios de pago","Defensa de las y los consumidores"]
	},
	{
		cabecera:"Experiencia Starbucks",
		opciones:["Formas de comprar","Delivery"]
	}

];

function footerOptionsDesktop(){
	return(

		<div className="container">
			<hr/>
			<div className="row">

			    {columnas.map((col) => {
              return <FooterColumnOptions cabecera={col.cabecera} 
              opciones={col.opciones} />;
            })}

			   <div className="col-2">
				    <ul>
				    	<li>
					<img src={DatosFiscales} className=" logo__fiscal" alt="Logo datos fiscales"/>
				       </li>
				    </ul>
			   </div>
			</div>
	    </div>
		)
	
}


function footerOptionsMobile(){

	return (columnas.map((col) => {
	              return <FooterAccordion cabecera={col.cabecera} 
	              opciones={col.opciones} />;
	            })
	);
	
}


function FooterOptions({ancho}){
		alert(ancho);
	    if(ancho<=450){
	    	return footerOptionsMobile();
	    }else{
	    	return footerOptionsDesktop();
	    }
		
	
}

export default FooterOptions;