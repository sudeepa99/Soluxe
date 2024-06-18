import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image_man from '../Assets/funny-smiling-hipster-handsome-man-guy-stylish-summer-clothes-street-posing-sitting-grass-sunglasses.jpg';
import image_man2 from '../Assets/man-sitting-cobblestone-road.jpg'
import image_women from '../Assets/girl-smiling-while-talking-her-mobile-sitting-floor.jpg'
import './ImageSlider.css';

export default function ImageSlider() {
  return (
    <div className='carousel'>
        <Carousel data-bs-theme="dark" interval={500} controls={true} indicators={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image_women}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Step into Style, Discover Your Perfect Pair Today</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image_man2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>Unmatched Comfort Meets Timeless Elegance, Shop Our Shoe Collection</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image_man}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>
          Elevate Your Every Step with Our Exclusive Footwear Range
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}
