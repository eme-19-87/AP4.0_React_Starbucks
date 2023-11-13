import React from 'react';
import FooterOptionsList from './footerOptionsList';

function FooterAccordion({cabecera,opciones}){
	return (

<div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${cabecera.substring(0,cabecera.indexOf(" "))}`} aria-expanded="false" aria-controls="collapseThree">
        {cabecera}
      </button>
    </h2>
    <div id={cabecera.substring(0,cabecera.indexOf(" "))} class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
         <ul>
        	{opciones.map((op) => {
              return <FooterOptionsList opcion={op}/>;
            })}
        </ul>
      </div>
    </div>
  </div>
	)
	
}

export default FooterAccordion;