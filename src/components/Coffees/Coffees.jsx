import CoffeeCard from "./../CoffeeCard/CoffeeCard";

const Coffees = ({ value }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {value.map((coffee, index) => (
            <CoffeeCard key={index} coffee={coffee}/>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
