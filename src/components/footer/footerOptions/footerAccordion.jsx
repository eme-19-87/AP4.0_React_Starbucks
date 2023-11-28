import React from 'react';
import FooterOptionsList from './footerOptionsList';

/**
*
* Permite colocar las opciones del pie en formato acordeón cuando la pantalla es pequeña
*@param {text} cabecera -Representa el tìtulo superior de las opciones
*@param {text} id -El id con el que se representará cada acordeón
*@param {array} opciones -Arreglo de strings con las opciones que se listarán al desplegar el acordeón
*@param {jsx} -Retorna los elementos que mostrarán las opciones en forma de acordeón
*
*/
function FooterAccordion({cabecera,opciones,id}){
	return (
        <div className="accordion accordion-flush">
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#"+id} aria-expanded="false" aria-controls="collapseThree">
                {cabecera}
              </button>
            </h2>
            <div id={id} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent={"#"+id} >
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