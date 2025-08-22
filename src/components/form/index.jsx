import React from 'react'
import "./index.scss";

function Form() {
  return (
    <div className='form'>
      <form>
        <div className='field'>
          <input type="email" id="email" name="email" required autocomplete="email" placeholder='' />
          <label>Email Address</label>
        </div>

        <div className='field'>
          <input type="password" id="password" name="password" required autocomplete="current-password" placeholder='' />
          <label>Password</label>
        </div>
      </form>

      <div className="options">
        <div className="checkbox-leaf">
          <input type='checkbox'></input>
          <span>Keep me centered</span>
        </div>
        <a href="">Restore access</a>
      </div>

      <div className="submit">
        <button>Enter Sanctuary</button>
      </div>

      <div class="balance-divider">
        <div class="divider-branch"></div>
        <div class="divider-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L8 8h8l-4-6zM12 22l4-6H8l4 6zM2 12l6-4v8l-6-4zM22 12l-6 4V8l6 4z" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
        <div class="divider-branch"></div>
      </div>
    </div>
  )
}

export default Form
