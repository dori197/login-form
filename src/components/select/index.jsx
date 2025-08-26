import { faApple, faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import "./index.scss"
import Loading from '../loading';

function Select() {
    const [loadingButton, setLoadingButton] = useState(null); // 'google', 'apple', 'facebook', 'twitter', hoặc null

    const handleLoginApp = (appName) => {
        try {
            setLoadingButton(appName);
            setTimeout(() => {
                setLoadingButton(null);
            }, 4000)
        } catch (error) {
            console.log("Failed Login", error);
            setLoadingButton(null);
        }
    }

    return (
        <>
            <div className='select'>
                <div className="select-app">
                    <div className='app'>
                        <button 
                            disabled={loadingButton === 'google'} 
                            onClick={() => handleLoginApp('google')}
                        >
                            {loadingButton === 'google' ? <Loading /> : <FontAwesomeIcon icon={faGoogle} className='google' />}
                        </button>
                    </div>
                </div>

                <div className="select-app">
                    <div className='app'>
                        <button 
                            disabled={loadingButton === 'apple'} 
                            onClick={() => handleLoginApp('apple')}
                        >
                            {loadingButton === 'apple' ? <Loading />  : <FontAwesomeIcon icon={faApple} className='apple' />}
                        </button>
                    </div>
                </div>

                <div className="select-app">
                    <div className='app'>
                        <button 
                            disabled={loadingButton === 'facebook'} 
                            onClick={() => handleLoginApp('facebook')}
                        >
                            {loadingButton === 'facebook' ? <Loading />  : <FontAwesomeIcon icon={faFacebookF} className='facebook' />}
                        </button>
                    </div>
                </div>

                <div className="select-app">
                    <div className='app'>
                        <button 
                            disabled={loadingButton === 'twitter'} 
                            onClick={() => handleLoginApp('twitter')}
                        >
                            {loadingButton === 'twitter' ? <Loading />  : <FontAwesomeIcon icon={faTwitter} className='twitter' />}
                        </button>
                    </div>
                </div>
            </div>
            <div className='createAccount'>
                <a href="">Don't have an account ?</a>
            </div>
        </>
    )
}

export default Select;