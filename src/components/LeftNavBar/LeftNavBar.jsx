// src/LeftNavbar.js
import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const LeftNavbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-2/5 md:w-1/3 lg:w-1/4 bg-gray-900 text-white md:pt-2  p-5 flex flex-col items-center justify-evenly animate-fadeIn">
      <div className="flex justify-center flex-col items-center">
        <div className="rounded-full border-2 border-black  w-[105px] h-[105px] md:w-28 md:h-28 ">
          <img
            src="passPic.jpg"
            alt="Profile"
            className="rounded-full w-[105px] h-[105px] md:w-28 md:h-28 border-2  border-yellow-100  mb-4"
          />
        </div>

        <h1 className="text-xl mt-5 md:mt-2  md:text-3xl w-full font-bold    text-center mb-2">
          LALIT KUMAR MOHANTY
        </h1>
        <p className="italic mb-4 text-sm md:text-sm text-center">
          "Stay hungry, stay foolish." - Steve Jobs
        </p>
      </div>

      <nav className="flex flex-col items-center space-y-4 text-lg">
        <a
          href="#about"
          className="hover:text-teal-500 transition duration-1000  "
        >
          ABOUT
        </a>
        <a
          href="#skills"
          className="hover:text-teal-500 transition duration-300"
        >
          MY SKILLS
        </a>
        <a
          onClick={() => scrollToSection("work-experience")}
          //href="#work-experience"
          className="hover:text-teal-500 transition duration-300"
        >
          EXPERIENCE
        </a>
        <a
          href="#education"
          className="hover:text-teal-500 transition duration-300"
        >
          EDUCATION
        </a>
        <a
          href="#projects"
          className="hover:text-teal-500 transition duration-300"
        >
          PROJECTS
        </a>
      </nav>

      <div className=" flex flex-col  w-full md:flex-row items-center gap-5 md:gap-3  mb-5 mt-4 ">
        <button className="px-4 w-full py-1  bg-teal-500 rounded-md hover:bg-teal-600 transition duration-300">
          HIRE ME
        </button>
        <button className="px-4 w-full  py-1  bg-teal-500 rounded-md hover:bg-teal-600 transition duration-300">
          GET MY CV
        </button>
      </div>

      <div className=" flex justify-evenly w-full pb-16   ">
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-2xl hover:text-teal-500  transition duration-300" />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub className="text-2xl hover:text-teal-500 transition duration-300" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook className="text-2xl hover:text-teal-500 transition duration-300" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="text-2xl hover:text-teal-500 transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default LeftNavbar;
