import React from 'react'
import Navigationbar from '../Components/Navigationbar';
import Content_new from '../Components/Content_new';
import CardDesign_New from '../Components/CardDesign_New';
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
import featured_image1 from '../Assets/drag-queen-show-shoes-arrangement-high-angle.jpg';
import featured_image2 from '../Assets/view-shoe-rack-stacking-pair-footwear.jpg';
import featured_image3 from '../Assets/leather-shoes-wooden-background.jpg';
import featured_image4 from '../Assets/view-shoe-rack-with-storage-space-footwear.jpg';

export default function New() {
  return (
    <div>
      <div>
        <Navigationbar/>
        <Content_new/>
        <CardDesign_New image_name={image_men_shoe1} shoe_value="200$" detail="anjksksks"/>
        <CardDesign_New image_name={image_men_shoe2} shoe_value="200$" detail="anjksksks"/>
        <CardDesign_New image_name={image_men_shoe3} shoe_value="200$" detail="anjksksks"/>
        <CardDesign_New image_name={image_men_shoe4} shoe_value="200$" detail="anjksksks"/>
        <CardDesign_New image_name={image_men_shoe5} shoe_value="200$" detail="anjksksks"/>
        <CardDesign_New image_name={image_women_shoe1} shoe_value="200$" detail="anjksksks"/>
        <CardDesign_New image_name={image_women_shoe2} shoe_value="200$" detail="anjksksks"/>
        <CardDesign_New image_name={image_women_shoe3} shoe_value="200$" detail="anjksksks"/>
        <CardDesign_New image_name={image_women_shoe4} shoe_value="200$" detail="anjksksks"/>
        <CardDesign_New image_name={image_women_shoe5} shoe_value="200$" detail="anjksksks"/>
        <CardDesign_New image_name={featured_image1} shoe_value="200$" detail="anjksksks"/>
        <CardDesign_New image_name={featured_image2} shoe_value="200$" detail="anjksksks"/>
        <CardDesign_New image_name={featured_image3} shoe_value="200$" detail="anjksksks"/>
        <CardDesign_New image_name={featured_image4} shoe_value="200$" detail="anjksksks"/>

      </div>
      
    </div>
  )
}
