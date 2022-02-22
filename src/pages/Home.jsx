import {
  Announcement,
  Navbar,
  Slider,
  Categories,
  Products,
  Newsletter,
} from "../components";
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
