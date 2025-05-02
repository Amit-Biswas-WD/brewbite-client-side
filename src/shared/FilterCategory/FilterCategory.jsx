import useCoffees from '../../hooks/useCoffees';

const FilterCategory = () => {
    const [featuredCoffees] = useCoffees()

    const espresso = featuredCoffees.filter((item) => item.category === "Espresso");
    const latte = featuredCoffees.filter((item) => item.category === "Latte");
    const cappuccino = featuredCoffees.filter((item) => item.category === "Cappuccino");
    const mocha = featuredCoffees.filter((item) => item.category === "Mocha");
    const coldBrew = featuredCoffees.filter((item) => item.category === "Cold Brew");
  return [espresso, latte, cappuccino, mocha, coldBrew];
}

export default FilterCategory