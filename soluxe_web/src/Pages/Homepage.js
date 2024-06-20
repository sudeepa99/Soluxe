import React from 'react'
import Navigationbar from '../Components/Navigationbar';
import ImageSlider from '../Components/ImageSlider';
import Content from '../Components/Content';
import CardDesign from '../Components/CardDesign';
import image_men_shoe1 from '../Assets/brown-leather-shoes.jpg';
import image_men_shoe2 from '../Assets/shoes.jpg';
import image_men_shoe3 from '../Assets/classic-stylish-men-s-shoes.jpg';
import image_men_shoe4 from '../Assets/men-shoes.jpg';
import image_men_shoe5 from '../Assets/classic-stylish-men-s-shoes-closeup-gray.jpg';
import image_women_shoe1 from '../Assets/fashion-pink-glamour-women-heels.jpg';
import image_women_shoe2 from '../Assets/woman-shoes.jpg';
import image_women_shoe3 from '../Assets/shoes-footwear-woman.jpg';
import image_women_shoe4 from '../Assets/woman-shoes new.jpg';
import image_women_shoe5 from '../Assets/high-heels-black-velvet.jpg';
import './Homepage.css';









export default function Homepage() {
  return (
    <div >
      <Navigationbar/>
      <ImageSlider/>
      <Content/>
      <div className='card_collection'>
      {/* men shoes */}
      <CardDesign image_name={image_men_shoe1} shoe_value="200 $" detail="jsjksksksk"/>
      <CardDesign image_name={image_men_shoe2} shoe_value="350 $" detail="jsjksksksk"/>
      <CardDesign image_name={image_men_shoe3} shoe_value="400 $" detail="jsjksksksk"/>
      <CardDesign image_name={image_men_shoe4} shoe_value="300 $" detail="jsjksksksk"/>
      <CardDesign image_name={image_men_shoe5} shoe_value="500 $" detail="jsjksksksk"/>

      {/* women shoes */}

      <CardDesign image_name={image_women_shoe1} shoe_value="500 $" detail="jsjksksksk"/>
      <CardDesign image_name={image_women_shoe2} shoe_value="500 $" detail="jsjksksksk"/>
      <CardDesign image_name={image_women_shoe3} shoe_value="500 $" detail="jsjksksksk"/>
      <CardDesign image_name={image_women_shoe4} shoe_value="500 $" detail="jsjksksksk"/>
      <CardDesign image_name={image_women_shoe5} shoe_value="500 $" detail="jsjksksksk"/>



      </div>
      
      
    </div>
  );
}
