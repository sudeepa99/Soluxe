import React from 'react'
import Navigationbar from '../Components/Navigationbar';
import ImageSlider from '../Components/ImageSlider';
import Content from '../Components/Content';
import CardDesign from '../Components/CardDesign';
import image_men_shoe1 from '../Assets/brown-leather-shoes.jpg'






export default function Homepage() {
  return (
    <div>
      <Navigationbar/>
      <ImageSlider/>
      <Content/>
      <CardDesign image_name={image_men_shoe1} shoe_value="2000 $" detail="jsjksksksk"/>
      
    </div>
  );
}
