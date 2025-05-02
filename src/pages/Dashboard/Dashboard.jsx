import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [user]);

  return (
    <div className="container mx-auto">
      <div className="mt-16 text-black">Dashboard: {data.length}</div>
      <div className="text-black mt-8">
        <h2 className="text-2xl font-bold">My Orders</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="text-black">
              <tr>
                <th className="!text-black">Image</th>
                <th className="!text-black">Order ID</th>
                <th className="!text-black">Product Name</th>
                <th className="!text-black">Price</th>
                <th className="!text-black">Edit</th>
                <th className="!text-black">Delete</th>
              </tr>
            </thead>
            <tbody className="!text-black">
              {data.map((order) => (
                <tr key={order._id} className="!text-black">
                  <td className="!text-black">
                    <img
                      src={order.coffee.image}
                      alt="Product"
                      className="w-12 h-12 rounded-xl"
                    />
                  </td>
                  <td className="!text-black">{order._id}</td>
                  <td className="!text-black">{order.coffee.name}</td>
                  <td className="!text-black">$ {order.coffee.price}</td>
                  <td className="!text-black">Edit</td>
                  <td className="!text-black">Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
