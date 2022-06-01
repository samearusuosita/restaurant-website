import React from 'react';

import './Gallery.css';
import {SubHeading} from '../../components'
import { images } from '../../constants';
import {BsInstagram, BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'


const galleryimages =[
  images.gallery01, images.gallery02, images.gallery03, images.gallery04]



const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;

    if (direction === 'Left'){
      current.scrollLeft -= 300;
    }else{
      current.scrollLeft += 300; 
    }
  }


  return(
    <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title="Instagram"/>
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{color: '#aaa', marginTop: 2}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>  
      <button type='button' className='custom__button'>You More</button>
    </div>


    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
      {galleryimages.map((image, index) =>(
        <div className="app__gallery-images_card flex__center" key={index+1}>
          <img src={image} alt="gallery" />
          <BsInstagram className='gallery__image-icon'/>
        </div>
      ))}
      </div>
      <div className="app__gallery-images_arrows">
      <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('Left')}/>
      <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('Right')}/>
    </div>
    </div>
  </div>
  )

};

export default Gallery;
