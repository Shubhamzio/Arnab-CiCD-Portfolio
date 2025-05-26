import React from 'react';
import AOS from 'aos';
import Footer from '../components/Footer';
import './sayHello.css';
import { FaFacebook, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import 'aos/dist/aos.css';

const SayHello = () => {
  return (
    <>
      <div className='sayHello_wrapper'>
        <div className='intro'>
          <h3 className='intro_paragraph' data-aos='fade-right' data-aos-duration='600'>
            "Everything created was first imagined. Whatever act I am in, I am first and foremost in the ideas of the act. Ideas earn enormous dividends."
          </h3>
        </div>

        <div className='required_field_social_combo'>
          <div className='required_field' data-aos='fade-left' data-aos-duration='600'>
            <h4>
              <span>Email:</span> info@arnabsengupta.com
            </h4>
          </div>
          <div className='social_heading_and_icon' data-aos='fade-right' data-aos-duration='600'>
            <h3>Socials</h3>
            <div className='social_icons'>
              <a href='https://www.facebook.com/imarnab97'>
                <FaFacebook size={40} style={{ color: '#262626' }} />
              </a>
              <a href='https://x.com/ArnabSe00979721'>
                <FaXTwitter size={40} style={{ color: '#262626' }} />
              </a>
              <a href='https://www.linkedin.com/in/arnab-sengupta-k176'>
                <FaLinkedinIn size={40} style={{ color: '#262626' }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='for_information_required'>
        <p>Please Fill Required Fields*</p>
        <form
          action='https://formsubmit.co/arnab@rydbergengineering.com'
          method='POST'
          className='all_inputs'
        >
          <input type='text' name='name' placeholder='Name' required />
          <input type='email' name='email' placeholder='Email' required />
          <input type='text' name='subject' placeholder='Your Subject' required />
          <textarea
            name='message'
            placeholder='Message'
            required
            rows='6'
          />

          <input type='hidden' name='_captcha' value='false' />
          <input type='hidden' name='_template' value='table' />

          <button type='submit' className='submit_button'>
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default SayHello;
AOS.init();