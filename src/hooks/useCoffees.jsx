import { useEffect, useState } from "react";

const useCoffees = () => {
  const [featuredCoffees, setFeaturedCoffees] = useState([]);

  useEffect(() => {
    fetch("https://brewbite-server-side.vercel.app/coffees", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setFeaturedCoffees(data));
  }, []);

  return [featuredCoffees];
};

export default useCoffees;
