import React from 'react';
import Navigationbar from '../Components/Navigationbar';
import Content_new from '../Components/Content_new';
import "./New.css";
import CardDesign_New from '../Components/CardDesign_New';
import image_men_shoe1 from '../Assets/brown-leather-shoes.jpg';
import image_men_shoe2 from '../Assets/shoes.jpg';
import image_men_shoe3 from '../Assets/classic-stylish-men-s-shoes.jpg';
import image_men_shoe4 from '../Assets/men-shoes.jpg';
import image_men_shoe5 from '../Assets/classic-stylish-men-s-shoes-closeup-gray.jpg';


export default function Men() {
  return (
    <div>
      <Navigationbar/>
      <Content_new/>
      <div className="cards_container">
        <CardDesign_New image_name={image_men_shoe1} shoe_value="200$" detail="anjksksks" tag_name="Men"/>
        <CardDesign_New image_name={image_men_shoe2} shoe_value="200$" detail="anjksksks" tag_name="Men"/>
        <CardDesign_New image_name={image_men_shoe3} shoe_value="200$" detail="anjksksks" tag_name="Men"/>
        <CardDesign_New image_name={image_men_shoe4} shoe_value="200$" detail="anjksksks" tag_name="Men"/>
        <CardDesign_New image_name={image_men_shoe5} shoe_value="200$" detail="anjksksks" tag_name="Men"/>
        
        

        </div>
      
    </div>
  )
}
