import img1 from "../../../../public/testimonial/Emily Carter (1).jpg";
import img2 from "../../../../public/testimonial/Screenshot_1.png";
import img3 from "../../../../public/testimonial/sophia-lin.jpg";


const testimonials = [
  {
    id: 1,
    name: "Emily Carter",
    designation: "Cafe Owner",
    company: "The Daily Grind",
    testimonial:
      "BrewBite's beans are top-notch. The aroma, the flavor — everything feels premium. My customers noticed the upgrade immediately, and sales went up!",
    rating: 5,
    image: img1,
  },
  {
    id: 2,
    name: "Daniel Moore",
    designation: "Remote Developer",
    company: "Freelancer",
    testimonial:
      "I start every coding session with a BrewBite pour-over. It's smooth, rich, and keeps me focused for hours. Absolute game changer!",
    rating: 4,
    image: img2,
  },
  {
    id: 3,
    name: "Sophia Lin",
    designation: "Food Blogger",
    company: "Tasty Trails",
    testimonial:
      "From the first sip, I knew BrewBite was different. It's bold yet balanced — perfect for my morning routine and photo-friendly for the ‘gram too!",
    rating: 5,
    image: img3,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-brown-900 mb-10 text-black">
        What Our Customers Say
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-[#fdfaf6] rounded-2xl p-6 shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <p className="text-gray-700 italic mb-4">"{t.testimonial}"</p>
            <div className="font-semibold text-brown-800">{t.name}</div>
            <div className="text-sm text-gray-500">
              {t.designation} at {t.company}
            </div>
            <div className="mt-2 text-yellow-500">
              {"★".repeat(t.rating) + "☆".repeat(5 - t.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
