import React from "react";
import Announcement from "../components/Announcement";
import { Navbar, Slider, Categories } from "../components";
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
