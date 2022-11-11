import React from 'react'

const SignupPage = () => {
  return (
    <div className='signup-container' >
      <section className='left-sec' >
        <header className='header-tag' >SignIn</header>
        <div className='input-component' >
          <input placeholder='Username or Email' className='input-component' />
          <input placeholder='Password' className='input-component' />
        </div>
        <div className='c-check' >
          <input type="checkbox" className='check-input' />
          <label className='label-text'>Keep me signed in</label>
        </div>
        <div className='bottom-btn'>
          <button className='b-button' >Sign In</button>
        </div>
        <div className='bottom-elements' ></div>
        
      </section>
      <section className='right-sec' >
        <h1>right sec</h1>
      </section>
    </div>
  )
}

export default SignupPage
