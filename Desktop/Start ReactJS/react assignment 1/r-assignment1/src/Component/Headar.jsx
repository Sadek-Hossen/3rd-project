import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // icon এর জন্য

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['About Us', 'Pricing', 'Customers', 'Solutions'];

  return (
    <header className="bg-[#002228] w-full text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="Logo.png" alt="Logo" className="h-10" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-7 text-sm font-medium">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-[#0FF1F6] transition-all"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="bg-[#0FF1F6] text-black rounded-full px-4 py-1 hover:bg-[#62b5b5] transition-all">
            Book a Demo
          </button>
          <button className="border border-white rounded-full px-4 py-1 hover:bg-[#62b5b5] transition-all">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#002228] px-5 pb-4">
          <nav className="flex flex-col gap-4 text-center font-medium">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-[#0FF1F6] transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}

            <button className="bg-[#0FF1F6] text-black rounded-full px-4 py-1 hover:bg-[#62b5b5] transition-all">
              Book a Demo
            </button>
            <button className="border border-white rounded-full px-4 py-1 hover:bg-[#62b5b5] transition-all">
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
