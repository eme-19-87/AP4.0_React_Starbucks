import React from 'react';
import "./footerContact.css";

const optionList=[
	{name:"Accesibilidad Web"},
	{name:"Aviso de privacidad"},
	{name:"Condiciones de uso"},
	{name:"Mapa del sitio"}
]


function listOptionsMobil(){

	return(
		<ul>
				{optionList.map((option,index)=>{
				return (<li className="contact__option mt-3" key={index} >{option.name}</li>)
			     
			})}
	    </ul>
	)
}

function listOptionsDesktop(){
  
	return(
  	<>
  	<div className="container">
  		<div className="d-flex justify-content-center mt-3">
  		
		{optionList.map((option,index)=>{
			if(index<optionList.length-1){
				return <a className="contact__option ms-2 text-center" key={index}>{`${option.name}`}
							<span className="ms-3">|</span>
						</a>

		} else{
			return (
				<a className="contact__option ms-2 text-center" key={index}>{`${option.name}`}
				</a>
			)
		}
					     
		})}
        
  	</div>
  	</div>
  
  	</>
  )

}


function FooterContactOptions({ancho}){
	
	return ancho<=450 ? listOptionsMobil() : listOptionsDesktop();

}

export default FooterContactOptions;