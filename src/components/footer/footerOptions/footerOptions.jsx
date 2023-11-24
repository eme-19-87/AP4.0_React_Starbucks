import React from "react";
import {useContext} from "react";
import {WindowSizeContext} from "../../../App";
import FooterColumnOptions from "./footerColumnOptions";
import FooterAccordion from './footerAccordion';
import "./footer.css";
import DatosFiscales from "../../../assets/img-data-fiscal.jpg"

/**
*
* @param {text} cabecera -Representa el título de la columna de opciones en el footer
* @param {array} opciones -Representa las opciones mostradas en cada columna
*/
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


/**
*
* Permite mostrar las opciones del footer mediante columnas cuando se tiene un 
* tamaño de pantalla acorde a las de escritorio
*/

function footerOptionsDesktop(){
	return(

		<div className="container">
			
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


/**
*
* Permite mostrar las opciones del footer dispuestos como un acordeón cuando el  
* tamaño de pantalla es acorde a los dispositivos móviles
*/
function footerOptionsMobile(){

	return (
		<>
		{
			columnas.map((col) => {
	              return <FooterAccordion cabecera={col.cabecera} 
	              opciones={col.opciones} />;
	            })
		}
		<img src={DatosFiscales} className=" logo__fiscal" alt="Logo datos fiscales"/>
		</>

		
	);
	
}

/**
*Permite mostrar las opciones del pie. Dependiendo el tamaño de la pantalla las 
*mostrará en forma de listas en disposición de columnas o en forma de acordeón
*
* @param {integer} width - Representa el ancho de la pantalla.
* 
*/
function FooterOptions(){
		const width=useContext(WindowSizeContext);
	    if(width<=750){
	    	return footerOptionsMobile();
	    }else{
	    	return footerOptionsDesktop();
	    }
		
	
}

export default FooterOptions;