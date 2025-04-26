import { Link } from "react-router-dom";
import CoffeeCard from "./../CoffeeCard/CoffeeCard";

const Coffees = ({ value }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {value.map((coffee, index) => (
          <Link to={`/coffeeDetails/${coffee._id}`} key={index}>
            <CoffeeCard coffee={coffee}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
