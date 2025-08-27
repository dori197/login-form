import React from 'react'
import "./index.scss";
import Header from '../../components/header';
import Form from '../../components/form';
import Select from '../../components/select';
import Clover from '../../components/clover';

function Home() {
    return (
        <>
            <div className='home'>
                <Header />
                <Form />
                <Select />
            </div>

            <Clover />
        </>
    )
}

export default Home;
