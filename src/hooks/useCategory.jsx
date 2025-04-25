import { useEffect, useState } from "react";

const useCategory = () => {
  const [featuredCoffees, setFeaturedCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setFeaturedCoffees(data));
  }, []);

  return [featuredCoffees];
};

export default useCategory;
