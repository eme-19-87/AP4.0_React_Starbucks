import React from 'react';

import  "../drinkBody.css";


function placeButton(){
	return(
		<div className="d-flex justify-content-center">
			<button type="button" className="btn btn-primary">Primary</button>
		</div>
		
		)
	
}
function placeImgTag(imagen, clase){
	return (
			<div class="col-md-5">
             <img src={imagen} className={`img-fluid ${clase}`} alt="..."/>
            </div>

	)

}

function placeTextContainer(titulo,subtitulo,clase,conBoton){

	return(
		<div className={`col-md-4 ${clase}`}>
    	<h2>{titulo}</h2>
      <div className="card-body">
        <p className="card-text">{subtitulo}</p>
        {conBoton?placeButton():null}
      </div>
    </div>

  )
}

function placeCard(img,claseImg,titulo,subtitulo,claseTexto,flip,conBoton){
	return(
		<div class="card mb-3 drink__card">
          <div class="row g-0">
    		{flip ? placeImgTag(img,claseImg):placeTextContainer(titulo,subtitulo,claseTexto,conBoton)}
    		{!flip ? placeImgTag(img,claseImg):placeTextContainer(titulo,subtitulo,claseTexto,conBoton)}
    
          </div>
       </div>
	)

}
function DrinkBody({data:{img,titulo,subtitulo,flip,conBoton}}){

	return placeCard(img,"img__desktop",titulo,subtitulo,"drink__body",flip,conBoton);
}


export default DrinkBody;