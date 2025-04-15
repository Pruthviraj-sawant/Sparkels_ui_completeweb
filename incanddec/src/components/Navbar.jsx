// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import logo from "../assets/ChatGPT Image Apr 11, 2025, 10_15_51 PM.png"; // Import your provided image

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-black text-white shadow-md">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo with Icon */}
//         <Link to="/" className="flex items-center ">
//           <img src={logo} alt="Sparkels UI Logo" className="w-15 h-10" /> {/* Icon */}
//           <span className="text-2xl font-bold text-white">Sparkels UI</span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <Link to="/" className="hover:text-gray-400">Home</Link>
//           <Link to="/about" className="hover:text-gray-400">About Us</Link>
//           <Link to="/components" className="hover:text-gray-400">Components</Link>
//           <Link to="/contact" className="hover:text-gray-400">Contact</Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col bg-black text-white space-y-4 p-4">
//           <Link to="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link to="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About Us</Link>
//           <Link to="/components" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Components</Link>
//           <Link to="/contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Info, LayoutGrid, Mail } from "lucide-react";
import logo from "../assets/ChatGPT Image Apr 11, 2025, 10_15_51 PM.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMenuToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white shadow-md relative z-50">
      {/* Top Navbar */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Sparkels UI Logo" className="w-15 h-10" />
          <span className="text-2xl font-bold">Sparkels UI</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About Us</Link>
          <Link to="/components" className="hover:text-gray-400">Components</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={handleMenuToggle}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Floating Bottom Icon Bar - Mobile Only */}
      {isOpen && (
  <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#1e1e1e] px-4 py-2 rounded-2xl shadow-lg flex items-center gap-4 z-50 transition-all duration-300">
    {[
      { to: "/", icon: <Home size={20} />, path: "/", title: "Home" },
      { to: "/about", icon: <Info size={20} />, path: "/about", title: "About" },
      { to: "/components", icon: <LayoutGrid size={20} />, path: "/components", title: "Components" },
      { to: "/contact", icon: <Mail size={20} />, path: "/contact", title: "Contact" },
    ].map((item, index) => (
      <Link key={index} to={item.to} title={item.title}>
        <div
          onMouseEnter={() => setHoveredIcon(index)}
          onMouseLeave={() => setHoveredIcon(null)}
          className={`p-2 rounded-full transition-transform duration-300 ease-in-out ${
            location.pathname === item.path ? 'bg-white text-black' : 'bg-black text-white'
          } ${
            hoveredIcon === index
              ? 'scale-125'
              : hoveredIcon !== null
              ? 'scale-90'
              : 'scale-100'
          }`}
        >
          {item.icon}
        </div>
      </Link>
    ))}
  </div>
)}


    </nav>
  );
};

export default Navbar;
