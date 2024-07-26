import React from 'react';
import '../style/Login.css';
import '../App.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import img from '../img.png';
import logono from '../logo-no-background.png';


const Login = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="box first">
          <div className="text" style={{ fontSize: '30px', fontWeight: 600 }}>Welcome back!</div>
          <div className="slogan" style={{ fontSize: '15px' }}>
            Turning ordinary ingredients into extraordinary dishes
          </div>
          <form action="">
            <div className="row">
              <FontAwesomeIcon icon={faUser} className='login-icon'/>
              <input type="text" placeholder="Enter your email" ></input>
            </div>
            <div className="row">
              <FontAwesomeIcon icon={faLock} className='login-icon' />
              <input type="password" placeholder="Password" />
            </div>
            <div className="check">
              <a href="#">Forgot Password?</a> 
            </div>
            <button className="btn">
            <Link to="/landing" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
            </button>
            <div className="extra-info">
              Don't have an account? <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>Signup</Link>
            </div>
          {/*  <div className="extra">or continue with</div>
           {/* <div className="social-link">
              <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
              <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href=""><FontAwesomeIcon icon={faInstagram} /></a> 
            </div>*/}
          </form>
        </div>

        <div className="box second">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <div className="slogan2">
            Elevate your kitchen experience with
            <div className="official-logo"><img src={logono} style={{ width: '450px', height: '60px' }} ></img></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;