import image from "../../../../public/Discover/discover.png";
import "./Discover.css";

const Discover = () => {
  return (
    <div className="bg-gradient-to-r to-[#ffff] from-[#f1e9e2]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4 py-10 items-center">
        <div className="p-6">
          <h2 className="text-[#603809] text-4xl md:text-5xl font-bold max-w-[650px]">
            Discover the best coffee
          </h2>
          <p className="text-lg md:text-xl font-normal text-[#707070] max-w-[650px] my-8">
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

        <div className="flex justify-center">
          <img
            src={image}
            alt="Coffee"
            className="lg:max-w-[600px] md:max-w-[400px] max-h-[450px] w-full bg-cover object-cover my-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
