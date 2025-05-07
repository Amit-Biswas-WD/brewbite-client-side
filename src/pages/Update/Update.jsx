import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const myData = useLoaderData();
  const {customerName, orderDate, location } = myData.customerInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const customerName = form.customerName.value;
    const orderDate = form.orderDate.value;
    const location = form.location.value;
    const valueInfo = { customerName, orderDate, location };
    console.log(valueInfo);

    fetch(`http://localhost:5000/orders/${myData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(valueInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Updated!");
      });

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 mt-16">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Update Customer Info
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Customer Name
            </label>
            <input
              type="text"
              name="customerName"
              defaultValue={customerName}
              className="w-full border text-black border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter customer name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Order Date
            </label>
            <input
              type="date"
              name="orderDate"
              defaultValue={orderDate}
              className="w-full border text-black border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              defaultValue={location}
              className="w-full border text-black border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter location"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Update Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
