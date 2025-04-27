import image1 from "../../../../public/banner/image1.png";

const HeroCopy = () => {
  return (
    <div className="mt-16">
      <div
        className="w-full h-[580px] bg-cover bg-center bg-no-repeat pl-10 text-white flex column"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="my-auto">
          <h2 className="text-[64px] font-bold max-w-[580px]">
            FRESH COFFEE IN THE MORNING
          </h2>
          <p className="max-w-[600px] text-lg font-normal text-gray-200">
            Starting the day with fresh coffee can provide a number of benefits,
            including increased energy and alertness, improved cognitive
            function, and a boost to mood.
          </p>
          <button className="my-6 bg-[#7b4f29] text-white px-4 py-3 rounded">
          ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCopy;
