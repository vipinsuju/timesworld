import React from 'react'
import signInImage from "../img/Cap.PNG"
import googleImage from "../img/g2.JPG"
import fbImage from "../img/f2.JPG"
import lnImage from "../img/l2.JPG"
import tweetImage from "../img/t2.JPG"
import { Link } from 'react-router-dom'

const SignupPage = () => {
  return (
    <div className='signup-container' >
      <section className='left-sec' >
        <header className='header-tag' >SignIn</header>
        <div className='sub-head' >
          <span className='span-one' >New user?</span>&nbsp;
          <span className='span-two' >Create an account</span>
        </div>
        <div className='input-component-main' >
          <input placeholder='Username or Email' className='input-component' />
          <input placeholder='Password' className='input-component' />
        </div>
        <div className='c-check' >
          <input type="checkbox" className='check-input' />
          <label className='label-text'>Keep me signed in</label>
        </div>
        <div className='bottom-btn'>
          <Link to="/home" >
            <button className='b-button' >Sign In</button>
          </Link>

        </div>
        <hr />

        <div className='bottom-elements'>
          <a href='https://www.google.co.in/'><img src={googleImage} alt='google' className='image-element' /></a>
          <a href='https://www.facebook.com/'><img src={fbImage} alt='fb' className='image-element' /></a>
          <a href='https://www.linkedin.com/'><img src={lnImage} alt='linkedIn' className='image-element' /></a>
          <a href='https://twitter.com/tweet?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
            <img src={tweetImage} alt='tweet' className='image-element' /></a>
        </div>

      </section>
      <section className='right-sec' >
        <img src={signInImage} alt="" />
      </section>
    </div>
  )
}

export default SignupPage
