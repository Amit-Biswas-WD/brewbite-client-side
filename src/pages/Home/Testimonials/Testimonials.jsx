import { Parallax } from "react-parallax";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Emily Carter",
    designation: "Cafe Owner",
    company: "The Daily Grind",
    testimonial:
      "BrewBite's beans are top-notch. The aroma, the flavor — everything feels premium. My customers noticed the upgrade immediately, and sales went up!",
    rating: 5,
    image: "/testimonial/Emily Carter (1).jpg",
  },
  {
    id: 2,
    name: "Daniel Moore",
    designation: "Remote Developer",
    company: "Freelancer",
    testimonial:
      "I start every coding session with a BrewBite pour-over. It's smooth, rich, and keeps me focused for hours. Absolute game changer!",
    rating: 4,
    image: "/testimonial/Screenshot_1.png",
  },
  {
    id: 3,
    name: "Sophia Lin",
    designation: "Food Blogger",
    company: "Tasty Trails",
    testimonial:
      "From the first sip, I knew BrewBite was different. It's bold yet balanced — perfect for my morning routine and photo-friendly for the ‘gram too!",
    rating: 5,
    image: "/testimonial/sophia-lin.jpg",
  },
];

const Testimonials = () => {
  return (
    <Parallax
      bgImage="/testimonial/testimonial.jpg"
      strength={500}
      bgImageStyle={{ objectFit: "cover" }}
    >
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl title font-bold text-center text-white mb-10">
          What Our Customers Say
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#58311591] backdrop-blur-md text-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <p className="italic mb-4">"{t.testimonial}"</p>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm">
                {t.designation} at {t.company}
              </div>
              <div className="mt-2 text-yellow-400 text-lg">
                {"★".repeat(t.rating) + "☆".repeat(5 - t.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Parallax>
  );
};

export default Testimonials;
