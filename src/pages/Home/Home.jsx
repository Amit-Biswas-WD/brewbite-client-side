import Categories from "./Categories/Categories";
import FeaturedCoffees from "./featuredCoffees/FeaturedCoffees";
import Hero from "./Hero/Hero";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories/>
      <FeaturedCoffees/>
      <Testimonials/>
    </div>
  );
};

export default Home;
