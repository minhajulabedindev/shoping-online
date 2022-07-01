import React from "react";
import Announcement from "../Component/Announcement";
import Categories from "../Component/Categories";
import Slider from "../Component/Slider";
import Footer from "../Component/Footer";
import Products from "../Component/Products";
import Newsletter from "../Component/Newsletter";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
