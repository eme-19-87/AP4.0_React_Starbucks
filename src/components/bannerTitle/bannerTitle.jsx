import React from 'react';
import Banner from '../banner/banner';


function BannerTitle({title,bgColor}){
	return(
		<div className="container mt-5">
		<div className="text-center p-3"
		 style={{
        backgroundColor:`${bgColor}`
      }}>
			<p className="fs-1 fw-bolder text-light">
				{title}
			</p>
		</div>
	    </div>
		
	)
}

export default BannerTitle