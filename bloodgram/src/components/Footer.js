import React from 'react';
import './Footer.css';
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialLinkedin, TiSocialFacebook }
  from "react-icons/ti";
import { IoWater } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='footer-approach'>
      <div className='footer-outer'>
        <div className='footerlogo'>

          <a className='footer-logo'>
            <svg
              id='logo-14'
              width='73'
              height='49'
              viewBox='0 0 73 49'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z'
                fill='#68DBFF'
              ></path>
              <path
                d='M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z'
                fill='#FF7917'
              ></path>
              <path
                d='M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z'
                fill='#5D2C02'
              ></path>            </svg>
          </a>

        </div>
        <div className='footer-list-div'>
          <div className='footer-about'>
            <p>About Us</p>
            <ul>
              <li>
                <a href="#"> About Us</a>
              </li>
              <li>
                <a href="#"> How It Works</a>
              </li>
              <li>
                <a href="#"> Team</a>
              </li>

            </ul>
          </div>
          <div className='footer-about'>
            <p>Contact us</p>
            <ul>
              <li>
                <a href="#"> Contact Us</a>
              </li>
              <li>
                <a href="mailto:hello@bloodgram.com"> Bloodgram@gmail</a>
              </li>
              <li>
                <a href="#"> 78908181819</a>
              </li>

            </ul>
          </div>
          <div className='footer-about'>
            <p> Resources</p>
            <ul>
              <li>
                <a href="#"> Help center</a>
              </li>
              <li>
                <a href="#"> terms & Privacy</a>
              </li>


            </ul>
          </div>
        </div>
      </div>
      <div className='footer-social'>
        <ul>
          <li>
            <TiSocialFacebook className='footer-socail-logo' /> <AiOutlineTwitter className='footer-socail-logo' /> <TiSocialLinkedin className='footer-socail-logo' />
          </li>
        </ul>
      </div>
      <div className='footer-copyright'>
        <h1> Save Life <IoWater className='logo-drop' /></h1>
        <p>
          Copyright &copy; 2022 by Bloodgram, Inc. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer