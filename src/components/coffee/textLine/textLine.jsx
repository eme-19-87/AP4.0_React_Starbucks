import React from 'react';
import './textLine.css';
function TextLine({text,classText}){
    return(
        <p className={classText} >{text} </p>
    )
}

export default TextLine;