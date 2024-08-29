// src/WorkExperienceTimeline.js
import React from "react";

const WorkExperience = () => {
  return (
    <div className="bg-teal-500 p-5 " id="experience">
      <h2 className="text-4xl text-white font-bold mb-8 text-shadow-2xl">
        EXPERIENCE
      </h2>
      <div className="relative">
        <div className="absolute h-full border-l-4 border-white left-1/2  transform -translate-x-1/2"></div>

        <div className="mb-8 flex flex-col items-center animate-fadeInDown ">
          <div className="flex w-full justify-end">
            <div className="w-1/2 p-4 animate-fadeIn bg-white shadow-lg rounded-lg transform transition-all duration-700 hover:scale-[1.04]">
              <h3 className="text-xl font-semibold">
                Frontend Developer Intern
              </h3>
              <p>The INTERNS</p>
              <span className="block mt-2 text-gray-500">
                April 2024 - Present
              </span>
            </div>
          </div>
          <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
        </div>
        <div className="mb-8 flex flex-col items-center animate-fadeInUp ">
          <div className="flex w-full justify-start">
            <div className="w-1/2 p-4 animate-fadeIn  bg-white shadow-lg rounded-lg transform transition-all duration-700 hover:scale-[1.04]">
              <h3 className="text-xl font-semibold">
                Frontend Developer Intern
              </h3>
              <p>GLUCIAN PVT LMTD.</p>
              <span className="block mt-2 text-gray-500">
                Oct 2023 - March 2024
              </span>
            </div>
          </div>
          <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
        </div>
        {/* <div className="mb-8 flex flex-col items-center animate-fadeInDown ">
          <div className="flex w-full justify-end">
            <div className="w-1/2 p-4 bg-white animate-fadeIn shadow-lg rounded-lg transform transition-all duration-700 hover:scale-[1.04]">
              <h3 className="text-xl font-semibold">Junior Developer</h3>
              <p>Web Innovators</p>
              <span className="block mt-2 text-gray-500">
                Jul 2017 - Dec 2019
              </span>
            </div>
          </div>
          <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
        </div> */}
      </div>
    </div>
  );
};

export default WorkExperience;
