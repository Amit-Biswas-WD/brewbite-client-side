import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const CoffeeDetailsCopy = () => {
  const coffee = useLoaderData();
  const { user } = useAuth();
  const email = user?.email || "";
  const value = { email, coffee };
  const { category, name, image, description, ingredients, price, rating } = coffee;
  
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:5000/orders?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserOrders(data);
        });
  }, [email]);

  const handleOrders = () => {
    //already ordered
    const alreadyOrdered = userOrders.find(
      (order) => order?.coffee?._id === coffee._id
    );

    if (alreadyOrdered) {
      toast.error("You have already ordered this product!");
      return;
    }

    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Your Order is confirmed!");
          setUserOrders((prevOrders) => [...prevOrders, value]);
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 p-6 bg-white shadow-xl rounded-2xl text-gray-800">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side Image */}
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

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg">Rating:</span>
                <div className="rating rating-sm">
                  {Array.from({ length: 5 }, (_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400"
                      checked={i + 1 === Math.round(rating)}
                      readOnly
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({rating}/5)</span>
              </div>

              {/* Order Button */}
              <button
                onClick={handleOrders}
                className="mt-4 bg-[#7b4f29] text-white px-4 py-2 rounded hover:bg-[#5c3c20]"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetailsCopy;
