import React from 'react'
import "./app.scss";
import Header from './components/header';
import Form from './components/form';
import Select from './components/select';

function App() {
  return (
    <div className='app'>
      <Header />
      <Form />
      <Select />
    </div>
  )
}

export default App;
