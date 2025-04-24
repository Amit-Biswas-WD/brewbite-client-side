import Categories from "./Categories/Categories";
import FeaturedCoffees from "./featuredCoffees/FeaturedCoffees";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories/>
      <FeaturedCoffees/>
    </div>
  );
};

export default Home;
