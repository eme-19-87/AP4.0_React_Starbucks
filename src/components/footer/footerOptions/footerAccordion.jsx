import React from 'react';
import FooterOptionsList from './footerOptionsList';

function FooterAccordion({cabecera,opciones}){
	return (
        <div className="accordion accordion-flush">
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${cabecera.substring(0,cabecera.indexOf(" "))}`} aria-expanded="false" aria-controls="collapseThree">
                {cabecera}
              </button>
            </h2>
            <div id={cabecera.substring(0,cabecera.indexOf(" "))} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                 <ul>
                  {opciones.map((op,index) => {
                      return <FooterOptionsList opcion={op} key={index}/>;
                    })}
                </ul>
              </div>
            </div>
          </div>

        </div>

	)
	
}

export default FooterAccordion;