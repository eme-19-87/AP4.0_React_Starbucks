import React from 'react';

function Button({titulo,clase}){
	return(
		<div className="d-flex justify-content-center">
			<button type="button" className="btn"
			style={{
        color:`${textColor}`
      }}>
      	{titulo}
      </button>
		</div>
		
		)
	
}

export default Button;