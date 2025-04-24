const Newsletter = () => {
  return (
    <div className="bg-brown-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-brown-900 mb-4 text-black">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Get the latest coffee trends, offers, and exclusive content straight
          to your inbox.
        </p>
        <form className="flex flex-col items-center space-y-4">
          <input
            type="email"
            placeholder="Type your email"
            className="w-full border-black sm:w-3/4 lg:w-1/2 py-3 px-6 rounded-lg text-brown-700 border border-brown-300 focus:ring-2 focus:ring-brown-500 focus:outline-none placeholder-gray-500"
          />
          <button
            type="submit"
            className="mt-4 bg-[#7b4f29] text-white px-4 py-2 rounded hover:bg-[#5c3c20]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
