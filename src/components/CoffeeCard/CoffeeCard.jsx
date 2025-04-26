import { FaStar } from "react-icons/fa"

const CoffeeCard = ({coffee}) => {
  return (
    <div className="bg-[#f1f0ef] rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300">
    <div className="w-90 h-64 overflow-hidden">
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
    <div className="flex justify-between items-center">
      <button className="mt-4 bg-[#7b4f29] text-white px-4 py-2 rounded hover:bg-[#5c3c20]">
        Order Now
      </button>
      <p className="text-black">
        $ {coffee.price}
      </p>
    </div>
  </div>
  )
}

export default CoffeeCard