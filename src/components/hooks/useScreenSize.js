import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  //const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const handleResize = () => {
    setWidth(window.innerWidth);
    //setHeight(window.innerHeight);
  };

  return { width};
};

export default useScreenSize;
