import Categories from "./Categories/Categories";
import FeaturedCoffees from "./featuredCoffees/FeaturedCoffees";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Newsletter from "./Newsletter/Newsletter";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories/>
      <FeaturedCoffees/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
