import React from 'react'
import PropTypes from 'prop-types';

function Button({color,text,onClick}) {
  
  return (
    <button 
      onClick = {onClick}
      className="btn" 
      style={{backgroundColor : color}}>
      {text}
    </button>
  )
}

Button.defaultProps={
  color : 'steelBlue',
  text : 'DEFAULT'
}
Button.protoTypes={
  text:PropTypes.string,
  color: PropTypes.string,
}

export default Button;
