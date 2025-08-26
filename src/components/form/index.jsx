import React, { useState } from 'react'
import "./index.scss";
import axios from 'axios';
import Swal from 'sweetalert2';

function Form() {
  const API_URL = "https://68ad6481a0b85b2f2cf324aa.mockapi.io/Users";
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setFormData({
      ...formData, email: e.target.value
    });
  }
  const handlePasswordChange = (e) => {
    setFormData({
      ...formData, password: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(API_URL, {
        email: formData.email,
        password: formData.password,
        createdAt: new Date().toISOString()
      });

      if (response.status === 201) {
        setFormData({
          email: '',
          password: ''
        });
      }

      showNotification();
    } catch (error) {
      console.log("Failed Login", error);
    } finally {
      setLoading(false);
    }
  }

  const showNotification = () => {
    Swal.fire({
      title: "Welcome!!!",
      text: "Login Succesfully",
      imageUrl: "https://i.pinimg.com/originals/17/b0/08/17b008553d9e2e4a965ab833e73fbc29.gif",
      imageWidth: 1000,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <input type="email" id="email" name="email" required autoComplete="email" placeholder='' value={formData.email} onChange={handleEmailChange} />
          <label>Email Address</label>
        </div>

        <div className='field'>
          <input type="password" id="password" name="password" required autoComplete="current-password" placeholder='' value={formData.password} onChange={handlePasswordChange} />
          <label>Password</label>
        </div>

        <div className="options">
          <div className="checkbox-leaf">
            <input type='checkbox'></input>
            <span>Keep me centered</span>
          </div>
          <a href="">Restore access</a>
        </div>

        <div className="submit">
          <button type='submit' disabled={loading}>
            {loading ? 'Please wait...' : 'Enter Sanctuary'}
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
    </div>
  )
}

export default Form
