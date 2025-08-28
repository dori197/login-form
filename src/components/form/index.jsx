import React, { useEffect, useState } from 'react'
import "./index.scss";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Form() {
  const API_URL = "https://68ad6481a0b85b2f2cf324aa.mockapi.io/Users";
  const [dataUser, setDataUser] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState('');
  const [notificationType, setNotificationType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAccess();
  }, [])

  const fetchAccess = async () => {
    const response = await axios.get(API_URL);
    console.log(response.data);
    setDataUser(response.data);
  }

  const handleAccesData = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      try {

        const findUser = dataUser.find((user) => (
          user.email === formData.email
          && user.password === formData.password
        ));

        if (findUser) {
          setNotification('Login Successfully');
          setNotificationType('success');
          navigate(`/Space-Page`);
        } else {
          setNotification('Incorrect Account or Password');
          setNotificationType('error');
        }

      } catch (error) {
        console.log("Login Failed", error);
        setNotification('failed');
      } finally {
        setLoading(false);
      }
    }, 1500);
  }

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

  const handleFunction = () => {
    showErrorForFunction();
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
    <div className='form'>
      <form onSubmit={handleAccesData}>
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
          <div className='restore' onClick={handleFunction}>Restore access</div>
        </div>

        {notification && (
          <div className={`notification-${notificationType}`}>
            {notification}
          </div>
        )}

        <div className="submit">
          <button type='submit' disabled={loading}>
            {loading ? 'Please wait...' : 'Access Spaces'}
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
