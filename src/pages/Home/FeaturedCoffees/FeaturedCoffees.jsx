import { Link } from "react-router-dom";
import useCoffees from "./../../../hooks/useCoffees";
import "./FeaturedCoffees.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { HashLoader } from "react-spinners";

const FeaturedCoffees = () => {
  const [featuredCoffees] = useCoffees();
  

    if (!featuredCoffees || featuredCoffees.length === 0) {
      return (
        <div className="min-h-screen flex justify-center items-center">
          <HashLoader color="#7b4f29" size={80} speedMultiplier={1.5} />
        </div>
      );
    }

  return (
    <div className="bg-[#f5ebe6]">
      <div className="py-14 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-black h2">
          ☕ Featured Coffees
        </h2>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {featuredCoffees
            .filter((coffee) => coffee.featuredCoffee)
            .slice(0, 6)
            .map((coffee) => (
              <SwiperSlide key={coffee._id}>
                <Link to={`/coffeeDetails/${coffee._id}`}>
                  <div
                    className="relative group text-center transition-all overflow-hidden shadow flex flex-col justify-center items-center"
                    style={{
                      backgroundImage: `url(${coffee.image})`,
                      height: "300px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <h3 className="text-white text-lg font-semibold z-10 relative">
                      {coffee.name}
                    </h3>
                    <div className="absolute inset-0 bg-[#1b1a1a] opacity-60 group-hover:bg-opacity-0 group-hover:translate-y-full transition-all duration-300 ease-in-out z-0"></div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedCoffees;
