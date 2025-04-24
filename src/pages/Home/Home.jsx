import hero from "../../../public/hero/harvesterimg.jpg"

const Home = () => {
  return (
    <div className="">
      <div className="hero min-h-screen bg-gray-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={hero}
            className="max-w-lg shadow-2xl"
            alt="Hero Visual"
          />
          <div>
            <h1 className="text-5xl font-playfair font-bold text-black">
              Welcome to Brew Bite
            </h1>
            <p className="py-6 text-lg text-gray-600">
              Your favorite place for freshly brewed coffee and warm
              conversations. Discover handcrafted flavors made with passion and
              served with a smile.
            </p>
            <button className="btn btn-active btn-primary">Explore Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
