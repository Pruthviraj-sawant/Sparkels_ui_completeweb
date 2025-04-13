import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/ChatGPT Image Apr 11, 2025, 10_15_51 PM.png"; // Import your provided image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Icon */}
        <Link to="/" className="flex items-center ">
          <img src={logo} alt="Sparkels UI Logo" className="w-15 h-10" /> {/* Icon */}
          <span className="text-2xl font-bold text-white">Sparkels UI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About Us</Link>
          <Link to="/components" className="hover:text-gray-400">Components</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-black text-white space-y-4 p-4">
          <Link to="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/components" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Components</Link>
          <Link to="/contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
