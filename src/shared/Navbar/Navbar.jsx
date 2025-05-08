import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, logOut } = useAuth();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Coffees", path: "/allCoffees/Espresso" },
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
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-200 font-sans ${
          isScrolled ? "bg-[#ecd3c3] shadow-md" : "bg-[#ddbeab]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/">
              <div className="flex items-center text-yellow-800">
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

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${
                      isActive ? "text-fuchsia-600" : "text-black"
                    } hover:text-fuchsia-600 font-normal transition-all duration-300`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              {/* Auth Buttons */}
              <div>
                {user?.email ? (
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 bg-[#e6cbb6] hover:bg-[#c7a891] text-black px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    <span>Log Out</span>
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    className="flex items-center gap-2 bg-[#e6cbb6] hover:bg-[#c7a891] text-black px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    <span>Login</span>
                  </NavLink>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-black">
                {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
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
        <div className="px-6 space-y-4 mt-8">
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
          {/* Mobile Auth Buttons */}
          {user?.email ? (
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 bg-[#e6cbb6] hover:bg-[#c7a891] text-black px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
            >
              <span>Log Out</span>
            </button>
          ) : (
            <NavLink
              to="/login"
              className="flex items-center gap-2 bg-[#e6cbb6] hover:bg-[#c7a891] text-black px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
            >
              <span>Login</span>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
