import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
    return (
        <nav className="w-full ">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Left */}

                <div className="flex gap-6 text-sm text-gray-600">
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Resources</a>
                </div>


                {/* Center Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="h-8 w-auto"
                    />
                </div>

                {/* Right */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                    <a href="#">Company</a>
                    <a href="#">Contact</a>

                    <button className="border border-cyan-500 text-cyan-500 px-4 py-1 rounded">
                        Login
                    </button>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
