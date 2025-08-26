import React from 'react'
import "./app.scss";
import Header from './components/header';
import Form from './components/form';
import Select from './components/select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClover } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Form />
        <Select />
      </div>

      <div className="clover-on-background">
        <div className="clover"><span className='c1'><FontAwesomeIcon icon={faClover} className='icon' /></span></div>
        <div className="clover"><span className='c2'><FontAwesomeIcon icon={faClover} className='icon' /></span></div>
        <div className="clover"><span className='c3'><FontAwesomeIcon icon={faClover} className='icon' /></span></div>
        <div className="clover"><span className='c4'><FontAwesomeIcon icon={faClover} className='icon' /></span></div>
        <div className="clover"><span className='c5'><FontAwesomeIcon icon={faClover} className='icon' /></span></div>
        <div className="clover"><span className='c6'><FontAwesomeIcon icon={faClover} className='icon' /></span></div>
      </div>
    </>
  )
}

export default App;
