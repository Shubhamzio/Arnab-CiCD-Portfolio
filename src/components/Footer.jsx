import React from 'react';
import logo from '../assets/logo_inverted.png';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope , FaFacebook, FaLinkedin } from "react-icons/fa";





const Footer = () => {
  return (
    <div className='footer_container'>
        <div className ='logo' data-aos='fade-right' data-aos-duration='600'>
          <img src ={logo} alt ='logo_for_footer'/>
        </div>
        <div className ='usefull_links'>
             <h3 data-aos='fade-right' data-aos-duration='600'>Usefull Links</h3>
             <div className ='links_for_footer' data-aos='fade-left' data-aos-duration='600'>
              <ul>
                <li><Link to ='/' className='links'> Home</Link></li>
                <li><Link to ='/about' className='links'>About</Link></li>
                <li><Link to ='/education' className='links'> Education</Link></li>
                <li><Link to ='/experince' className='links'>Experience</Link></li>
                <li><Link to ='/skill' className='links'>Skill</Link></li>
                <li><Link to ='/portfolio' className='links'>Portfolio</Link></li>
              </ul>
             </div>
             </div>

             <div className ='contact_us' data-aos='fade-right' data-aos-duration='600'>
                <h3>Contact</h3>
                <div className='address_container'>
                  <FaMapMarkerAlt size ={20} style = {{color: ' rgb(255, 183, 0)'}}/>
                  <p>Salt Lake City, Kolkata-123456, West Bengal, India</p>
                </div>
                <div className='call_container'>
                <FaPhone size ={20} style = {{color: 'rgb(255, 183, 0)'}}/>
                <p>Salt Lake City, Kolkata-123456, West Bengal, India</p>
                </div>
                <div className='mail_container'>
                <FaEnvelope size ={20} style = {{ color:'rgb(255, 183, 0)'}}/>
                <p>arnabsg75@gmail.com</p>
                </div>
             </div>


{/* last social starts */}


<div className= 'social'>
<div className ='for_social_logos' data-aos='fade-left' data-aos-duration='600'>
  <Link to ={'https://www.facebook.com/'}  style ={{color: '#ffffff'}}><FaFacebook size ={25}/></Link>
  <Link to ={'https://www.linkedin.com/'} style ={{color: '#ffffff'}}><FaLinkedin size ={25}/></Link>
</div>
<p>©Arnab Sengupta 2025</p>
<p>All Rights Reserved</p>
</div>



    </div>
  )
}

export default Footer;