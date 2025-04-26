import { FaStar } from "react-icons/fa";
import useCategory from "../../../hooks/useCategory";
import { Link } from "react-router-dom";

const FeaturedCoffees = () => {
  const [featuredCoffees] = useCategory();

  return (
    <div className="bg-[#f5ebe6]">
      <div className="py-14 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">
          ☕ Featured Coffees
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCoffees
            .filter((coffee) => coffee.featuredCoffee)
            .slice(0, 6)
            .map((coffee, index) => (
              <div
                key={index}
                className="bg-[#f1f0ef] rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-90 h-64 overflow-hidden rounded-lg">
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-full h-full object-cover mb-4"
                  />
                </div>

                <h3 className="text-xl font-semibold text-black mt-3">
                  {coffee.name}
                </h3>

                <div className="flex items-center mt-2">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="text-black">{coffee.rating}</span>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-black font-semibold text-lg">
                    ${coffee.price}
                  </p>
                </div>

                <div className="flex justify-evenly gap-3 items-center mt-4">
                <button className="bg-[#7b4f29] hover:bg-[#5c3c20] text-white py-2 px-6 rounded-full">
                Order Now
                  </button>

                  <Link to={`/coffeeDetails/${coffee._id}`}>
                  <button className="bg-[#7b4f29] hover:bg-[#5c3c20] text-white py-2 px-6 rounded-full">
                  View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCoffees;
