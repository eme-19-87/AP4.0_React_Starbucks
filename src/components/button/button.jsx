import React from 'react';

function Button({titulo,theme}){
	return(
		<div className="d-flex justify-content-center mt-3">
			<button type="button" className={`btn-${theme}`}>
      	{titulo}
      </button>
		</div>
		
		);
	
}

export default Button;