import React from 'react';
import TextLine from '../textLine/textLine';
import Button from '../../button/button';
import './coffeeBanner.css';

/**
*Retornará el botón en caso que el banner lo tenga
*
* @param {text} btnTitle -El título del banner.
*/
function placeButton(btnTitle){
    return (<Button title={btnTitle} />)
}

/**
*Retornará los datos mostrados en la sección de café
*
* @param {text} img -La ruta de la imagen que se mostrará.
* @param {text} title -El título del banner.
*---------------------------Inicio Descripción de nrtTextLine--------------------------------------------------------
* @param {object} ntrTextLine -Objeto que contiene toda la información de los párrafos que se mostrarán. Formado por:
* @param {text} ntrTextLine.firtsTextLine -El texto que se mostrará en el primer párrafo
* @param {object} ntrTextLine.otherTextLines -Objetos con los datos para cada párrafo después del primero. Formado por:
*  @param {text} ntrTextLine.otherTextLines.text -El texto del párrafo
* @param {text} ntrTextLine.otherTextLines.classText -La clase que se aplicará a dicho párrafo
*---------------------------Fin Descripción de nrtTextLine--------------------------------------------------------
* @param {boolean} button -Si la sección tiene o no botón.
* @param {text} btnTitle -El título del botón
*/
function CoffeeBanner({data:{title,nrTextLine,img,button,btnTitle}}){
    return(
        <>
         <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                        <section className="card coffee__banner">
                            <h5 className="card-title mb-3">{title} </h5>
                            <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <p>{nrTextLine.firstTextLine} </p>
                                {nrTextLine.otherTextLines.map((dato,index)=>{
                                    return(<TextLine text={dato.text} classText={dato.classText} key={index} />)
                                })}
                            {button? placeButton(btnTitle) :null}
                            </div>
                    </section>
                </div>
            </div>
         </div>
          
             

        </>
    )
   
}

export default CoffeeBanner;