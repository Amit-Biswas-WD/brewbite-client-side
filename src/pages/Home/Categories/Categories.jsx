import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto text-black">
      <h2 className="text-3xl font-bold text-center mb-6">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="text-center hover:scale-105 transition-all duration-300"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-32 object-cover rounded-lg shadow"
            />
            <h3 className="mt-2 text-lg font-medium">{cat.name}</h3>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to={`/allCoffees`}>
          <button className="bg-[#7b4f29] hover:bg-[#5c3c20] text-white py-2 px-6 rounded-full">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
