import image from "../../../../public/Discover/discover.jpg";
import "./Discover.css";

const Discover = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 container mx-auto py-20">
        <div className="">
          <h2 className="text-[#603809] text-[54px] font-bold">
            Discover the best coffee
          </h2>
          <p className="text-xl font-normal text-[#707070] max-w-[585px] my-8">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>
          <button className="bg-[#7b4f29] hover:bg-[#5c3c20] text-white py-2 px-6 rounded-full">
            Learn More
          </button>
        </div>
        <img src={image} alt="" className="max-w-[600px] max-h-[450px]" />
      </div>
    </div>
  );
};

export default Discover;
