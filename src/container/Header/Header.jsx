import React from 'react';
import './Header.css';
import { SubHeading } from '../../components';

import{images} from '../../constants'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
    <SubHeading title="Chase the new flavour"/>
    <h1 className="app__header-h1">The key to Fine Dinning</h1>
    <p className="p__opensans" style={{margin: '2rem 0'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
    <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
