
const Contact = () => {

  return (
    <div className="max-w-md mt-[64px] mx-auto p-6 bg-white text-black shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
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
  );
};

export default Contact;
 