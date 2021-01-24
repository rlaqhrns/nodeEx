import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button.js';


function Header({title}){
  const onClick = (e) => {
    console.log("button 클릭 ");
  }
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        <Button onClick = {onClick} color="red" text="RED" />
        
        
      </header>
    </div>
  )
}
Header.defaultProps = {
  title: '태스크 트래커',
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Header;

