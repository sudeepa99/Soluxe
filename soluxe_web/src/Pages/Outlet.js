import React from 'react';
import Navigationbar from '../Components/Navigationbar';
import Content_outlet from '../Components/Content_outlet';
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
import CardDesign_outlet from '../Components/CardDesign_outlet';
import "./Outlet.css";

export default function Outlet() {
  return (
    <div>
      <Navigationbar/>
      <Content_outlet/>

      <div className="outlet_container">
      <CardDesign_outlet image_name={image_men_shoe1} shoe_value="200$" actual_value="150$" detail="anjksksks" tag_name="Final Sale"/>
      <CardDesign_outlet image_name={image_men_shoe2} shoe_value="300$" actual_value="250$" detail="anjksksks" tag_name="Final Sale"/>
      <CardDesign_outlet image_name={image_men_shoe3} shoe_value="320$" actual_value="300$"detail="anjksksks" tag_name="Final Sale"/>
      <CardDesign_outlet image_name={image_men_shoe4} shoe_value="270$" actual_value="230$"detail="anjksksks" tag_name="Final Sale"/>
      <CardDesign_outlet image_name={image_men_shoe5} shoe_value="250$" actual_value="220$"detail="anjksksks" tag_name="Final Sale"/>

      <CardDesign_outlet image_name={image_women_shoe1} shoe_value="400$" actual_value="350$" detail="anjksksks" tag_name="Final Sale"/>
      <CardDesign_outlet image_name={image_women_shoe2} shoe_value="480$" actual_value="450$"detail="anjksksks" tag_name="Final Sale"/>
      <CardDesign_outlet image_name={image_women_shoe3} shoe_value="330$" actual_value="300$"detail="anjksksks" tag_name="Final Sale"/>
      <CardDesign_outlet image_name={image_women_shoe4} shoe_value="270$" actual_value="250$"detail="anjksksks" tag_name="Final Sale"/>
      <CardDesign_outlet image_name={image_women_shoe5} shoe_value="290$" actual_value="250$"detail="anjksksks" tag_name="Final Sale"/>

      </div>


      
      
    </div>
  )
}
