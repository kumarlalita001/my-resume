// src/Navbar.js
import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-gray-400"
          >
            About Me
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-gray-400"
          >
            My Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("work-experience")}
            className="hover:text-gray-400"
          >
            Work Experience
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("education")}
            className="hover:text-gray-400"
          >
            Education
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-gray-400"
          >
            Projects
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
