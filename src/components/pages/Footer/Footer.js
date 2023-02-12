import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { RiStockFill } from 'react-icons/ri';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest financial news
        </p>
        <p className='footer-subscription-text'>
          
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsorships</Link>
          </div>

          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={
                '//www.youtube.com/@felixonkundi9971/featured'
              }
              target='_blank'
              aria-label='Instagram'
              >Instagram</Link>
            <Link to={
                '//www.youtube.com/@felixonkundi9971/featured'
              }
              target='_blank'
              aria-label='Facebook'
              >Facebook</Link>
            <Link 
              to={
                '//www.youtube.com/@felixonkundi9971/featured'
              }
              target='_blank'
              aria-label='Youtube'
              >Youtube</Link>
            <Link to={
                '//twitter.com/Onkundi_Felix'
              }
              target='_blank'
              aria-label='Twitter'
              >Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <RiStockFill className='navbar-icon' />
              FXINC
            </Link>
          </div>
          <small className='website-rights'>Onkundi Felix © 2022 All Rights Reserved</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='//onkundifelixportfolio.netlify.app'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='//onkundifelixportfolio.netlify.app'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/@felixonkundi9971/featured'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='//twitter.com/Onkundi_Felix'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.linkedin.com/in/onkundifelix'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;