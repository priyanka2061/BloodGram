import React from 'react';
import './Login.css';
import { BsPersonCircle } from 'react-icons/bs'

function Login() {
  return (
    <div className='login-page'>
      {/* <h1>Login Credentials</h1> */}
      <div className='login-pack'>
        <BsPersonCircle className='login-icons' />
        <form>
          <label>
            <input  type='text'className='inpu'
              placeholder='  Enter Your Email' />
          </label>
          <label>
            <input
              placeholder='   Enter Your Password' type='text'/>
          </label>
          <button className='lo'>LOGIN</button>
        </form>
        <div><h2>New to BloodGram?<a href='/signup'>Create an account</a></h2></div>
        <button className='rese'>Forgot Password</button>
      </div>
    </div>
  );
}

export default Login;
