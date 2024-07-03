import React from 'react'
import Navigationbar from '../Components/Navigationbar'
import BannerImage from "../Assets/Banner_Image.png";
import { Image } from 'react-bootstrap';
import "./OurStory.css";
import Story_container1 from '../Components/Story_container1';

export default function OurStory() {
  return (
    <div>
      <Navigationbar/>
      <Image className="banner_img" src={BannerImage}></Image>
      <Story_container1/>
      
    </div>
  )
}
