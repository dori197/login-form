import React, { useEffect } from 'react'
import "./index.scss";
import Swal from 'sweetalert2';
import LoadingHamster from './loading-hamster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import AiInput from './ai-input';

function SpacePage() {

    useEffect(() => {
        showNotification();
    }, []);

    const showNotification = () => {
        Swal.fire({
            title: "Welcome!!!",
            text: "Access Succesfully",
            imageUrl: "https://i.pinimg.com/originals/17/b0/08/17b008553d9e2e4a965ab833e73fbc29.gif",
            imageWidth: 1000,
            imageHeight: 300,
            imageAlt: "Custom image"
        });
    }

    return (
        <div className='space-page'>
            <div className="title">
                <p>Welcome to</p>
            </div>
            <div className="subTitle">
                <p>Leaf Space</p>
            </div>
            <div className="banner">
                <div className='logo'>
                    <FontAwesomeIcon icon={faLeaf} style={{ color: "rgb(76, 175, 80)", }} />
                </div>
            </div>
            <div className='content'>
                <div className='content__first'><LoadingHamster /></div>
                <div className='content__second'><AiInput /></div>
            </div>
        </div>
    )
}

export default SpacePage;
