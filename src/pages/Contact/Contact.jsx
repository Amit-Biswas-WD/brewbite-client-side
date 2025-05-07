const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 mt-16 py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
        <form className="space-y-4">
          <input
            name="name"
            placeholder="Your Name"
            className="w-full border text-black border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border text-black border-gray-300 rounded px-3 py-2"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border text-black border-gray-300 rounded px-3 py-2 h-32"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-black py-2 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
