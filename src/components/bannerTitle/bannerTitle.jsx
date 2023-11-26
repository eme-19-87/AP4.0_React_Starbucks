import React from 'react';
import "./bannerTitle.css";

import {useContext} from "react";
import {ThemeContext} from "../../App";

function BannerTitle({title}){
	const {theme}=useContext(ThemeContext);
	return(
		<div className={`container mt-5 title-bar-${theme}`}>
		<div className="text-center p-3">
			<p className="fs-1 fw-bolder text-light">
				{title}
			</p>
		</div>
	    </div>
		
	)
}

export default BannerTitle