import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const {user} = useAuth()

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [user]);

  return <div className="mt-16 text-black bg-[#f5ebe6]">Dashboard: {data.length}</div>;
};

export default Dashboard;
