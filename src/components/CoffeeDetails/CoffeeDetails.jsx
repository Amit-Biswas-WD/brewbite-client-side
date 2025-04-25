import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { category, name, image, description, ingredients, price, rating } =
    coffee;

  return (
    <div className="max-w-4xl mx-auto mt-16 p-6 bg-white shadow-xl rounded-2xl text-gray-800">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={image}
            alt={name}
            className="w-full h-[300px] object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-2">{name}</h2>
            <p className="text-base text-gray-500 mb-4">Category: {category}</p>
            <p className="text-lg mb-4 text-gray-700">{description}</p>
          </div>

          <div className="flex items-center gap-4 my-8">
            <hr className="flex-grow border-t-2 border-[#e27f4e]" />
            <h2 className="text-[#e27f4e] text-xl font-bold text-center">
              Brew Bite
            </h2>
            <hr className="flex-grow border-t-2 border-[#e27f4e]" />
          </div>

          <div className="space-y-2">
            <p>
              <span className="font-semibold text-lg">Ingredients:</span>{" "}
              {ingredients?.join(", ")}
            </p>
            <p>
              <span className="font-semibold text-lg">Price:</span> $ {price}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-lg">Rating:</span>
              <div className="rating rating-sm">
                {Array.from({ length: 5 }, (_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name="rating"
                    className={`mask mask-star-2 bg-orange-400`}
                    checked={i + 1 === Math.round(rating)}
                    readOnly
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({rating}/5)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
