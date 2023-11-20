import React from "react";
import Body from "../components/body/body";
function HomePage({width}) {
	{alert (`Width en HomePage: ${width}`)}
  return (
    
      <Body width={width} />
  
  );
}

export default HomePage;