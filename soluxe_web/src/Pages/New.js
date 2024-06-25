import React from 'react'
import Navigationbar from '../Components/Navigationbar';
import Content_new from '../Components/Content_new';
import CardDesign_New from '../Components/CardDesign_New';
import "./New.css";
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
import Footer from '../Components/Footer';


export default function New() {
  return (
    <div>
      <div>
        <Navigationbar/>
        <Content_new/>
        <div className="cards_container">
        <CardDesign_New image_name={image_men_shoe1} shoe_value="200$" detail="anjksksks" tag_name="New"/>
        <CardDesign_New image_name={image_men_shoe2} shoe_value="200$" detail="anjksksks" tag_name="New"/>
        <CardDesign_New image_name={image_men_shoe3} shoe_value="200$" detail="anjksksks" tag_name="New"/>
        <CardDesign_New image_name={image_men_shoe4} shoe_value="200$" detail="anjksksks" tag_name="New"/>
        <CardDesign_New image_name={image_men_shoe5} shoe_value="200$" detail="anjksksks" tag_name="New"/>
        <CardDesign_New image_name={image_women_shoe1} shoe_value="200$" detail="anjksksks" tag_name="New"/>
        <CardDesign_New image_name={image_women_shoe2} shoe_value="200$" detail="anjksksks" tag_name="New"/>
        <CardDesign_New image_name={image_women_shoe3} shoe_value="200$" detail="anjksksks" tag_name="New"/>
        <CardDesign_New image_name={image_women_shoe4} shoe_value="200$" detail="anjksksks" tag_name="New"/>
        <CardDesign_New image_name={image_women_shoe5} shoe_value="200$" detail="anjksksks" tag_name="New"/>
        

        </div>
        <Footer/>
        
      </div>
      
    </div>
  )
}
