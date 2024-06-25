import React from 'react';
import Navigationbar from '../Components/Navigationbar';
import Content_new from '../Components/Content_new';
import CardDesign_New from '../Components/CardDesign_New';
import image_women_shoe1 from '../Assets/fashion-pink-glamour-women-heels.jpg';
import image_women_shoe2 from '../Assets/woman-shoes.jpg';
import image_women_shoe3 from '../Assets/shoes-footwear-woman.jpg';
import image_women_shoe4 from '../Assets/woman-shoes new.jpg';
import image_women_shoe5 from '../Assets/high-heels-black-velvet.jpg';

export default function Women() {
  return (
    <div>
      <Navigationbar/>
      <Content_new/>

      <div className="cards_container">

        <CardDesign_New image_name={image_women_shoe1} shoe_value="200$" detail="anjksksks" tag_name="Women"/>
        <CardDesign_New image_name={image_women_shoe2} shoe_value="200$" detail="anjksksks" tag_name="Women"/>
        <CardDesign_New image_name={image_women_shoe3} shoe_value="200$" detail="anjksksks" tag_name="Women"/>
        <CardDesign_New image_name={image_women_shoe4} shoe_value="200$" detail="anjksksks" tag_name="Women"/>
        <CardDesign_New image_name={image_women_shoe5} shoe_value="200$" detail="anjksksks" tag_name="Women"/>
      </div>

      
      
    </div>
  )
}
