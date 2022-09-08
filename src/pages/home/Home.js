import React from "react";
import Navbar from "../../components/Navbar/Navbar.component";
import Announcement from "../../components/Announcement/Annoucement.compoent";
import Slider from "../../components/Slider/Slider.component";
import Category from "../../components/Category/Category.component";
const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider/>
      <Category/>
    </div>
  );
};

export default Home;
