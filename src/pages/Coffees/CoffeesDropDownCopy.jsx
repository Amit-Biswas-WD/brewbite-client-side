import Coffees from "../../components/Coffees/Coffees";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import { useEffect, useState } from "react";
import useCoffees from "../../hooks/useCoffees";

const CoffeesDropDownCopy = () => {
  const [featuredCoffees] = useCoffees([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    setValue(featuredCoffees);
  }, [featuredCoffees]);

  return (
    <div className="bg-[#f5ebe6]">
      <div className="container mx-auto">
        <div className="flex justify-between mt-4 mb-2 stack gap-8">
          <CategoryButton
            featuredCoffees={featuredCoffees}
            setCategory={setValue}
          />
        </div>
        <Coffees value={value} />
      </div>
    </div>
  );
};

export default CoffeesDropDownCopy;
