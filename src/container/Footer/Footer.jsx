import React from 'react';
import{FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

import './Footer.css';


const Footer = () => (
  <div className='app__footer section__padding'>
    <Newsletter/>
    <FooterOverlay/>

    <div className="app__footer-links p_address">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">4th Street Jame Cam Road, Lagos Nigeria</p>
        <p className="p__opensans" >0706 543 4953</p>
        <p className="p__opensans">0706 543 4953</p>
      </div>
       
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <img src={images.spoon} alt="Spoon_img" className='spoon__img' style={{marginTop: 15 }}/>
          <div className="app__footer-links_icons">
            <FiFacebook/>
            <FiInstagram/>
            <FiTwitter/>
          </div>
      </div>

      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Work Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans" >8am - 4pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">8am - 10pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All right reserved.</p>
    </div>
  </div>
);

export default Footer;
