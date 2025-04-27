import Categories from "./Categories/Categories";
import Discover from "./Discover/Discover";
import FeaturedCoffees from "./featuredCoffees/FeaturedCoffees";
import HeroCopy from "./Hero/HeroCopy";
// import Hero from "./Hero/Hero";
import Newsletter from "./Newsletter/Newsletter";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <HeroCopy/>
      <Categories/>
      <Discover/>
      <FeaturedCoffees/>
      <Testimonials/>
      <Newsletter/>
    </div>
  );
};

export default Home;
