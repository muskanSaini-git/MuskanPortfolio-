import React, { useState } from "react";

const smoothScroll = (e, target) => {
  e.preventDefault();
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn(`Element with target ${target} not found.`);
  }
};


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <a href="#home" onClick={(e) => smoothScroll(e, "#home")}>MUSKAN</a>
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
  className="text-white text-2xl md:hidden"
  onClick={() => setMenuOpen(!menuOpen)}  
  aria-expanded={menuOpen ? "true" : "false"}  
  aria-controls="navbar-menu"  // Links the button to the menu
>
  ☰
</button>


        {/* Navbar Links */}
        <ul
        
          className={`flex flex-col md:flex-row md:space-x-6 absolute md:static top-16 left-0 w-full bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 md:bg-transparent md:w-auto md:py-0 py-6 transition-all duration-300 
            ${menuOpen ? "block" :""} 
            ${menuOpen ? "md:block" : ""}`} 
        >
          <li className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => smoothScroll(e, "#home")}
              className="block md:inline-block py-2 px-4 hover:text-pink-400"
            >
              Home
            </a>
          </li>
          <li className="text-center md:text-left">
            <a
              href="#about"
              onClick={(e) => smoothScroll(e, "#about")}
              className="block md:inline-block py-2 px-4 hover:text-pink-400"
            >
              About
            </a>
          </li>
          <li className="text-center md:text-left">
            <a
              href="#experience"
              onClick={(e) => smoothScroll(e, "#experience")}
              className="block md:inline-block py-2 px-4 hover:text-pink-400"
            >
              Experience
            </a>
          </li>
          <li className="text-center md:text-left">
            <a
              href="#skills"
              onClick={(e) => smoothScroll(e, "#skills")}
              className="block md:inline-block py-2 px-4 hover:text-pink-400"
            >
              Skills
            </a>
          </li>
          <li className="text-center md:text-left">
            <a
              href="#education"
              onClick={(e) => smoothScroll(e, "#education")}
              className="block md:inline-block py-2 px-4 hover:text-pink-400"
            >
              Education
            </a>
          </li>
          <li className="text-center md:text-left">
            <a
              href="#projects"
              onClick={(e) => smoothScroll(e, "#projects")}
              className="block md:inline-block py-2 px-4 hover:text-pink-400"
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
