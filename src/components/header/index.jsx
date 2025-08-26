import React from 'react'
import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='header'> 
      <div className="overlay"></div>
      <div className="header__banner">
        <div className='logo'>
            <FontAwesomeIcon icon={faLeaf} style={{color: "rgb(76, 175, 80)",}} />
        </div>
      </div>
      <div className="header__title">
        <span>LEAFS SPACE</span>
      </div>
      <div className="header__subTitle">
        Enter your wellness sanctuary 
      </div>
    </div>
  )
}

export default Header;
