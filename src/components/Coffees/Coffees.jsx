import CoffeeCard from "./../CoffeeCard/CoffeeCard";

const Coffees = ({ value }) => {
  
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-10">
        {value.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Coffees;
