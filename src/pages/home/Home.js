import React from "react";
import Navbar from "../../components/Navbar/Navbar.component";
import Announcement from "../../components/Announcement/Annoucement.compoent";
import Slider from "../../components/Slider/Slider.component";
import Category from "../../components/Category/Category.component";
import Products from "../../components/Products/Products.component";
import Newsletter from "../../components/NewsLetter/NewseLetter.component";
import Footer from "../../components/Footer/Footer.componenet";
const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider/>
      <Category/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
