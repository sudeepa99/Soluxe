import React from 'react'
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
      <Content_outlet/>

      <div className="outlet_container">
      <CardDesign_outlet image_name={image_men_shoe1} shoe_value="200$" detail="anjksksks" tag_name="Men"/>
      <CardDesign_outlet image_name={image_men_shoe2} shoe_value="200$" detail="anjksksks" tag_name="Men"/>
      <CardDesign_outlet image_name={image_men_shoe3} shoe_value="200$" detail="anjksksks" tag_name="Men"/>
      <CardDesign_outlet image_name={image_men_shoe4} shoe_value="200$" detail="anjksksks" tag_name="Men"/>
      <CardDesign_outlet image_name={image_men_shoe5} shoe_value="200$" detail="anjksksks" tag_name="Men"/>

      <CardDesign_outlet image_name={image_women_shoe1} shoe_value="200$" detail="anjksksks" tag_name="Women"/>
      <CardDesign_outlet image_name={image_women_shoe2} shoe_value="200$" detail="anjksksks" tag_name="Women"/>
      <CardDesign_outlet image_name={image_women_shoe3} shoe_value="200$" detail="anjksksks" tag_name="Women"/>
      <CardDesign_outlet image_name={image_women_shoe4} shoe_value="200$" detail="anjksksks" tag_name="Women"/>
      <CardDesign_outlet image_name={image_women_shoe5} shoe_value="200$" detail="anjksksks" tag_name="Women"/>

      </div>


      
      
    </div>
  )
}
