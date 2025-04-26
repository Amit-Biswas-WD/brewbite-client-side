import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  return (
    <div className="bg-[#f1f0ef] rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300">
      <div className="w-90 h-64 overflow-hidden">
        <img
          src={coffee.image}
          alt={coffee.name}
          className="w-full h-full object-cover mb-4"
        />
      </div>

      <h3 className="text-xl font-semibold text-black mt-3">{coffee.name}</h3>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500 mr-1" />
        <span className="text-black">{coffee.rating}</span>
      </div>
      <p className="text-black">$ {coffee.price}</p>
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
  );
};

export default CoffeeCard;
