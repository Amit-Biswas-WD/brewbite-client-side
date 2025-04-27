import { Link } from "react-router-dom";
import useCoffees from "./../../../hooks/useCoffees";
import "./FeaturedCoffees.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const FeaturedCoffees = () => {
  const [featuredCoffees] = useCoffees();

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
          modules={[Pagination]}
        >
          {featuredCoffees
            .filter((coffee) => coffee.featuredCoffee)
            .slice(0, 6)
            .map((coffee) => (
              <SwiperSlide key={coffee._id}>
                <div className="bg-[#f1f0ef] rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
                  <div className="w-90 h-56 overflow-hidden">
                    <img
                      src={coffee.image}
                      alt={coffee.name}
                      className="max-w-[200px] h-full object-cover mb-4"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-black mt-3">
                    {coffee.name}
                  </h3>

                  <div className="flex justify-between items-center mt-4">
                    <p className="text-black font-semibold text-lg">
                      ${coffee.price}
                    </p>
                    <Link to={`/coffeeDetails/${coffee._id}`}>
                      <button className="bg-[#7b4f29] text-white text-base px-[13px] py-[7px] rounded hover:bg-[#5c3c20]">
                        View Details
                      </button>
                    </Link>
                  </div>
                  <div className="absolute inset-0 bg-[#000] opacity-60 group-hover:bg-opacity-0 group-hover:translate-y-full transition-all duration-300 ease-in-out z-0"></div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedCoffees;
