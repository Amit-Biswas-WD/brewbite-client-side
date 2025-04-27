import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css"

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="bg-black/95">
      <div className="py-12 px-4 max-w-7xl mx-auto text-white">
        <h2 className="text-3xl font-bold text-center mb-6 h2">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative group text-center transition-all overflow-hidden rounded-lg shadow flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(${cat.image})`,
                height: "300px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-white text-lg font-semibold z-10 relative">
                {cat.name}
              </h3>
              <div className="absolute inset-0 bg-[#000] opacity-60 group-hover:bg-opacity-0 group-hover:translate-y-full transition-all duration-300 ease-in-out z-0"></div>{" "}
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
    </div>
  );
};

export default Categories;
