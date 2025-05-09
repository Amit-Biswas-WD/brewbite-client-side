import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import "./Categories.css";
import image from "../../../../public/category/image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://brewbite-server-side.vercel.app/category", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <Parallax
      bgImage={image}
      strength={250}
      bgImageStyle={{ objectFit: "cover" }}
    >
      <div className="py-12 px-4 max-w-7xl mx-auto text-black">
        <h2 className="text-3xl font-bold text-center mb-6 h2">
          Explore Categories
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
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
          {categories.map((cat) => (
            <SwiperSlide key={cat._id}>
              <Link to={`/allCoffees/${cat.category}`}>
                <div
                  className="relative group text-center transition-all overflow-hidden shadow flex flex-col justify-center items-center"
                  style={{
                    backgroundImage: `url(${cat.image})`,
                    height: "300px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h3 className="text-white text-lg font-semibold z-10 relative">
                    {cat.category}
                  </h3>
                  <div className="absolute inset-0 bg-[#1b1a1a] opacity-60 group-hover:bg-opacity-0 group-hover:translate-y-full transition-all duration-300 ease-in-out z-0"></div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-8">
          <Link to={`/allCoffees`}>
            <button className="bg-[#7b4f29] hover:bg-[#5c3c20] text-white py-2 px-6 rounded-full text-sm md:text-base">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </Parallax>
  );
};

export default Categories;
