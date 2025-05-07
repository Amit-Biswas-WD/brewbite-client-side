import useCoffees from "./useCoffees";

const useCategory = () => {
  const [category] = useCoffees();
  
  const Espresso = category.filter((item) => item.category === "Espresso");
  const Latte = category.filter((item) => item.category === "Latte");
  const Cappuccino = category.filter((item) => item.category === "Cappuccino");
  const Mocha = category.filter((item) => item.category === "Mocha");
  const coldBrew = category.filter((item) => item.category === "Cold Brew");
  return [Espresso, Latte, Cappuccino, Mocha, coldBrew];
};

export default useCategory;
