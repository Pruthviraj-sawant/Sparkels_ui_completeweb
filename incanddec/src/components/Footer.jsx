import React from "react";
import logo from "../assets/ChatGPT Image Apr 11, 2025, 10_15_51 PM.png"
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Sparkels UI Logo" className="w-20 h-20" />
          <span className="text-xl font-semibold">Sparkels UI</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-gray-300 text-sm">
          <a href="/components" className="hover:text-white transition">Components</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Contact Info */}
        <div className="text-gray-400 text-sm text-center md:text-left">
          <p>Instagram: <a href="https://www.instagram.com/sparkels_ui" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@sparkels_ui</a></p>
          <p>Email: <a href="mailto:sawantpruthviraj1@gmail.com" className="text-white hover:underline">sawantpruthviraj1@gmail.com</a></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Sparkels UI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
