import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // Optional: mobile menu icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">

        {/* Left / Menu Links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">Resources</a>
        </div>

        {/* Center Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-8 w-auto" />
        </div>

        {/* Right / Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#">Company</a>
          <a href="#">Contact</a>
          <button className="border border-cyan-500 text-cyan-500 px-4 py-1 rounded">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-gray-600 text-sm">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">Resources</a>
          <a href="#">Company</a>
          <a href="#">Contact</a>
          <button className="border border-cyan-500 text-cyan-500 px-4 py-1 rounded w-full mt-2">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

