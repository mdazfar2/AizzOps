import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-600 py-16 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center px-4">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="assets/img/Azfar-fevico.webp"
            alt="logo"
            className="w-10 h-10 object-contain"
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-8 text-sm tracking-wide mb-6">
          <a href="#home" className="hover:text-black transition">HOME</a>
          <a href="#about" className="hover:text-black transition">ABOUT</a>
          <a href="#work" className="hover:text-black transition">WORKS</a>
          <a href="#blogs" className="hover:text-black transition">BLOGS</a>
          <a href="#contact" className="hover:text-black transition">CONTACT</a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © {currentYear}{" "}
          <span className="text-blue-600 font-medium">Azfar Alam</span>{" "}
          All rights reserved.
        </p>

      </div>
    </footer>
  );
}
