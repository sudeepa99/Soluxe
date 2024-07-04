import React from 'react'
import Navigationbar from '../Components/Navigationbar'
import BannerImage from "../Assets/Banner_Image.png";
import { Image } from 'react-bootstrap';
import "./OurStory.css";
import Story_container1 from '../Components/Story_container1';
import Story_container2 from '../Components/Story_container2';
import Story_container3 from '../Components/Story_container3';
import Story_container4 from '../Components/Story_container4';

export default function OurStory() {
  return (
    <div>
      <Navigationbar/>
      <Image className="banner_img" src={BannerImage}></Image>
      <Story_container1/>
      <Story_container2/>
      <Story_container3/>
      <Story_container4/>
      
    </div>
  )
}
