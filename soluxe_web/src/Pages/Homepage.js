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
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoChevronForward } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import Featured from '../Components/Featured';
import featured_image1 from '../Assets/drag-queen-show-shoes-arrangement-high-angle.jpg';
import featured_image2 from '../Assets/view-shoe-rack-stacking-pair-footwear.jpg';
import featured_image3 from '../Assets/leather-shoes-wooden-background.jpg';
import featured_image4 from '../Assets/view-shoe-rack-with-storage-space-footwear.jpg';











export default function Homepage() {
  const scrollLeft = () => {
    document.getElementById('cardContainer').scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    document.getElementById('cardContainer').scrollBy({ left: 300, behavior: 'smooth' });
  };
  return (
    <div>
      <Navigationbar />
      <ImageSlider />
      <Content />
      <div className="scroll-container">
      <IoIosArrowBack className="scroll-icon" onClick={scrollLeft}  />
  
        <div id="cardContainer" className='card_collection'>
          {/* men shoes */}
          <CardDesign image_name={image_men_shoe1} shoe_value="200 $" detail="jsjksksksk" />
          <CardDesign image_name={image_men_shoe2} shoe_value="350 $" detail="jsjksksksk" />
          <CardDesign image_name={image_men_shoe3} shoe_value="400 $" detail="jsjksksksk" />
          <CardDesign image_name={image_men_shoe4} shoe_value="300 $" detail="jsjksksksk" />
          <CardDesign image_name={image_men_shoe5} shoe_value="500 $" detail="jsjksksksk" />

          {/* women shoes */}
          <CardDesign image_name={image_women_shoe1} shoe_value="500 $" detail="jsjksksksk" />
          <CardDesign image_name={image_women_shoe2} shoe_value="500 $" detail="jsjksksksk" />
          <CardDesign image_name={image_women_shoe3} shoe_value="500 $" detail="jsjksksksk" />
          <CardDesign image_name={image_women_shoe4} shoe_value="500 $" detail="jsjksksksk" />
          
        </div>
        <IoChevronForward  className="scroll-icon" onClick={scrollRight} />
      </div>
      {/* Featured list */}
      <div>
      <div className='featured_header'>
        <h1>Featured Collections</h1> 
      </div>
      <div className='featured_cards'>
        <Featured Image_path={featured_image1} title="Shop Low Tops"/>
        <Featured Image_path={featured_image2} title="Shop Loafers"/>
        <Featured Image_path={featured_image3} title="Shop Shoe Care & Laces"/>
        <Featured Image_path={featured_image4} title="Shop Royale 2.0"/>
        
      </div>
        

      </div>
      
    </div>
  );
}
