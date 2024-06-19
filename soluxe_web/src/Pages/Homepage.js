import React from 'react'
import Navigationbar from '../Components/Navigationbar';
import ImageSlider from '../Components/ImageSlider';
import Content from '../Components/Content';
import CardDesign from '../Components/CardDesign';






export default function Homepage() {
  return (
    <div>
      <Navigationbar/>
      <ImageSlider/>
      <Content/>
      <CardDesign/>
      
    </div>
  );
}
