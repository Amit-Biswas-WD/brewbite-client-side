import { useEffect, useState } from "react";

const useCoffees = () => {
  const [featuredCoffees, setFeaturedCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => setFeaturedCoffees(data));
  }, []);

  return [featuredCoffees];
};

export default useCoffees;
