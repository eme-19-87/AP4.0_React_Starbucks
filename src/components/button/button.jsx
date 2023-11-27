import React from 'react';
import {useContext} from "react";
import './button.css';
import {ThemeContext} from "../../App";
function Button({title}){
	const {theme}=useContext(ThemeContext);

	return(
		<div className="d-flex justify-content-center mt-3">
			<button type="button" className={`btn-${theme}`}>
      	{title}
      </button>
		</div>
		
		);
	
}

export default Button;