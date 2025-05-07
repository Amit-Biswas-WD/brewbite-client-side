import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  const url = `http://localhost:5000/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your order has been deleted.", "success");
              const remaining = bookings.filter(
                (bookingItem) => bookingItem._id !== id
              );
              setBookings(remaining);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="container mx-auto mt-16">
      <div className="text-black">
        <h2 className="text-2xl font-bold mb-4">
          My Orders: {bookings.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="text-black">
              <tr>
                <th className="!text-black">Image</th>
                <th className="!text-black">Product Name</th>
                <th className="!text-black">Customer Name</th>
                <th className="!text-black">Order Date</th>
                <th className="!text-black">Location</th>
                <th className="!text-black">Edit</th>
                <th className="!text-black">Delete</th>
              </tr>
            </thead>
            <tbody className="!text-black">
              {bookings.map((order) => (
                <tr key={order._id}>
                  <td>
                    <img
                      src={order.coffee.image}
                      alt={order.coffee.name}
                      className="w-12 h-12 rounded-xl"
                    />
                  </td>
                  <td>{order.coffee.name}</td>
                  <td>{order.customerInfo?.customerName || "N/A"}</td>
                  <td>{order.customerInfo?.orderDate || "N/A"}</td>
                  <td>{order.customerInfo?.location || "N/A"}</td>
                  <td>
                    <Link to={`/update/${order._id}`}>
                      <button className="btn btn-outline">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="btn btn-outline"
                    >
                      Delete
                    </button>
                  </td>
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
