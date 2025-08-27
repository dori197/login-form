import { faApple, faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import "./index.scss"
import Loading from '../loading';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Select() {
    const [loadingButton, setLoadingButton] = useState(null); 

    const handleLoginApp = (appName) => {
        try {
            setLoadingButton(appName);
            setTimeout(() => {
                setLoadingButton(null);
                showErrorForFunction();
            }, 4000)
        } catch (error) {
            console.log("Failed Login", error);
            setLoadingButton(null);
        }
    }

    const showErrorForFunction = () => {
        Swal.fire({
            title: "<strong>This Function Is Not Working Now</strong>",
            icon: "info",
            html: `
        Please Wait To Update <br /> <strong> Thanks!!! </strong>
      `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
            cancelButtonAriaLabel: "Thumbs down"
        });
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
                            {loadingButton === 'apple' ? <Loading /> : <FontAwesomeIcon icon={faApple} className='apple' />}
                        </button>
                    </div>
                </div>

                <div className="select-app">
                    <div className='app'>
                        <button
                            disabled={loadingButton === 'facebook'}
                            onClick={() => handleLoginApp('facebook')}
                        >
                            {loadingButton === 'facebook' ? <Loading /> : <FontAwesomeIcon icon={faFacebookF} className='facebook' />}
                        </button>
                    </div>
                </div>

                <div className="select-app">
                    <div className='app'>
                        <button
                            disabled={loadingButton === 'twitter'}
                            onClick={() => handleLoginApp('twitter')}
                        >
                            {loadingButton === 'twitter' ? <Loading /> : <FontAwesomeIcon icon={faTwitter} className='twitter' />}
                        </button>
                    </div>
                </div>
            </div>
            <div className='createAccount'>
                <Link to={"/createAccount"}>Don't have an account ?</Link>
            </div>
        </>
    )
}

export default Select;