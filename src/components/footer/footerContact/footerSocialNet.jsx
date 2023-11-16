import React from 'react';
import "./footerContact.css";

const socialNetworks=[
	{name:"Facebook",icon:"bi bi-facebook",link:""},
	{name:"Instagram",icon:"bi bi-instagram",link:""},
	{name:"Linkedin",icon:"bi bi-linkedin",link:""}

];


function FooterSocialNet(){
  return(
  	<>
  	<div className="container">
  		<hr/>
  		<div className="d-flex justify-content-center">
  		
		{socialNetworks.map(social=>{
			return <a><i className={`${social.icon} me-5 mt-3`}></i></a>
		     
		})}
        
  	</div>
  	</div>
  
  	</>
  )
}

export default FooterSocialNet;