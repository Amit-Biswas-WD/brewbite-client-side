import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "", path: "/" },
    { name: "All Coffees", path: "/alCoffees" },
    { name: "Login", path: "/login" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Contact", path: "/contact" },
  ];

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-400 ${
          isScrolled ? "bg-gray-500 shadow-md" : "bg-gray-700"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/">
              <div className="flex items-center font-sans text-yellow-400">
                <h2 className="text-3xl font-bold uppercase font-playfair hidden lg:block">
                  Brew Bite
                </h2>
                <h2 className="text-2xl font-bold uppercase font-playfair hidden md:block lg:hidden">
                  Brew Bite
                </h2>
                <h2 className="text-xl font-bold uppercase font-playfair block md:hidden">
                  Brew Bite
                </h2>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${
                      isActive ? "text-green-400" : "text-white"
                    } hover:text-green-400 font-normal transition-all duration-300`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu icon */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-700 shadow-md transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <FaTimes size={22} />
          </button>
        </div>
        <div className="px-6 space-y-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 ${
                  isActive ? "text-green-400" : "text-white"
                } hover:text-blue-500 transition`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
