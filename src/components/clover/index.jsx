import React from 'react'
import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClover } from '@fortawesome/free-solid-svg-icons';

function Clover() {
    return (
            <div className="clover-on-background">
                <div className="clover"><span className='c1'><FontAwesomeIcon icon={faClover} className='icon' /></span></div>
                <div className="clover"><span className='c2'><FontAwesomeIcon icon={faClover} className='icon' /></span></div>
                <div className="clover"><span className='c3'><FontAwesomeIcon icon={faClover} className='icon' /></span></div>
                <div className="clover"><span className='c4'><FontAwesomeIcon icon={faClover} className='icon' /></span></div>
                <div className="clover"><span className='c5'><FontAwesomeIcon icon={faClover} className='icon' /></span></div>
                <div className="clover"><span className='c6'><FontAwesomeIcon icon={faClover} className='icon' /></span></div>
            </div>
    )
}

export default Clover
