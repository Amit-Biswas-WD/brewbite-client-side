import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { user } = useAuth();
  const email = user?.email || "";

  const { category, name, image, description, ingredients, price, rating } = coffee;

  const [userOrders, setUserOrders] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    orderDate: "",
    location: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserOrders(data);
      });
  }, [email]);

  const openPopup = () => {
    const alreadyOrdered = userOrders.find(
      (order) => order?.coffee?._id === coffee._id
    );

    if (alreadyOrdered) {
      toast.error("You have already ordered this coffee!");
      return;
    }

    setIsPopupOpen(true);
  };

  const handleOrders = () => {
    const alreadyOrdered = userOrders.find(
      (order) => order?.coffee?._id === coffee._id
    );

    if (alreadyOrdered) {
      toast.error("You have already ordered this product!");
      setIsPopupOpen(false);
      return;
    }

    const orderData = {
      email,
      coffee,
      customerInfo: formData,
    };

    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Your Order is confirmed!");
          setUserOrders((prev) => [...prev, orderData]);
          setIsPopupOpen(false);
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
            <h2 className="text-[#e27f4e] text-xl font-bold text-center">Brew Bite</h2>
            <hr className="flex-grow border-t-2 border-[#e27f4e]" />
          </div>

          <div className="space-y-2">
            <p><span className="font-semibold text-lg">Ingredients:</span> {ingredients?.join(", ")}</p>
            <p><span className="font-semibold text-lg">Price:</span> $ {price}</p>

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

              <button
                onClick={openPopup}
                className="mt-4 bg-[#7b4f29] text-white px-4 py-2 rounded hover:bg-[#5c3c20]"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Confirm Your Order</h3>

            <div className="space-y-4">
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <input
                type="date"
                name="orderDate"
                value={formData.orderDate}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Your Location"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleOrders}
                className="bg-[#7b4f29] text-white px-4 py-2 rounded hover:bg-[#5c3c20]"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeeDetails;
