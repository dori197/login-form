import React, { useState } from 'react'
import "./index.scss";
import Header from '../../components/header';
import Form from '../../components/form';
import Clover from '../../components/clover';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {

  //API
  const API_URL = "https://68ad6481a0b85b2f2cf324aa.mockapi.io/Users";
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    vertificationCode: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleEmailChange = (event) => {
    setFormData({
      ...formData, email: event.target.value
    });
  }

  const handlePasswordChange = (event) => {
    setFormData({
      ...formData, password: event.target.value
    });
  }

  const handleConfirmPasswordChange = (event) => {
    setFormData({
      ...formData, confirmPassword: event.target.value
    });
  }

  const handleVertificationCodeChange = (event) => {
    setFormData({
      ...formData, vertificationCode: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    setMessageType('');

    try {

      if (formData.password !== formData.confirmPassword) {
        setLoading(false);
        setMessage('Please Confirm Correct Password !');
        setMessageType('error');
        return;
      }

      if ( formData.vertificationCode !== 'd0rI' ) {
        setLoading(false);
        setMessage('Please Enter Correct Vertification Code !')
        setMessageType('error');
        return;
      }

      const response = await axios.post(API_URL, {
        email: formData.email,
        password: formData.password,
        createdAt: new Date().toISOString()
      });

      if (response.status === 201) {
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          vertificationCode: ''
        })
        setMessage('Creat Account Succesfully !!!');
        setMessageType('success');
      }

    } catch (error) {
      console.log("Create Failed !", error);
      setMessage('Create Account Failed !');
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='register'>
        <Header />

        <div className='form'>
          <form onSubmit={handleSubmit}>
            <div className='field'>
              <input type="email" id="newEmail" name="newEmail" required autoComplete="email" placeholder='' value={formData.email} onChange={handleEmailChange} />
              <label>Your Email</label>
            </div>

            <div className='field'>
              <input type="password" id="newPassword" name="newPassword" required autoComplete="current-password" placeholder='' value={formData.password} onChange={handlePasswordChange} />
              <label>Your Password</label>
            </div>

            <div className='field'>
              <input type="password" id="confirmPassword" name="confirmPassword" required autoComplete="current-password" placeholder='' value={formData.confirmPassword} onChange={handleConfirmPasswordChange} />
              <label>Confirm Password</label>
            </div>

            <div className='vertification-code'>
              <div className='code'>
                <span>Please enter this code</span>
                <p>d0rI</p>
              </div>
              <div className='input-code'>
                <input type="text" id="code" name='code' placeholder='Enter Code Here To Vertifi' required autoComplete='code' value={formData.vertificationCode} onChange={handleVertificationCodeChange} />
              </div>
            </div>

            {message && (
              <div className={`message-${messageType}`}>
                {message}
              </div>
            )}

            <div className="submit">
              <button type='submit' disabled={loading}>
                {loading ? "Sending..." : "Enter Sanctuary"}
              </button>
            </div>
          </form>

          <div className="balance-divider">
            <div className="divider-branch"></div>
            <div className="divider-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L8 8h8l-4-6zM12 22l4-6H8l4 6zM2 12l6-4v8l-6-4zM22 12l-6 4V8l6 4z" fill="currentColor" opacity="0.6" />
              </svg>
            </div>
            <div className="divider-branch"></div>
          </div>

          <div className='ending'>
            <Link to={"/"}>Comeback to login</Link>
          </div>
        </div>
      </div>

      <Clover />
    </>
  )
}

export default Register;
