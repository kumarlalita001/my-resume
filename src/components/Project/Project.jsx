import React from "react";
import Heading from "../HeadingComp/Heading";

const Project = () => {
  return (
    <div className="p-5" id="projects">
      <Heading name={"PROJECTS"} />
      <div className="relative flex  flex-col gap-16">
        {/* SVG for Curved Line */}
        <svg
          className="absolute  w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 48 -10 Q 53  40, 48 66 T 78 90"
            stroke="black"
            strokeWidth="1"
            fill="none"
          />
          {/* <path
        d="M 50 0 Q 55 25, 50 50 T 50 100"
        stroke="white"
        strokeWidth=""
        fill="none"
      /> */}
        </svg>

        <div className="mb-8 flex flex-col items-center animate-fadeInDown">
          {/* <div className="flex w-full justify-end">
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
          <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div> */}
        </div>

        {/* First Card */}
        <div className="mb-8 flex flex-col items-center animate-fadeInDown">
          <div className="flex w-full p-5   flex-col items-end  h-56 justify-end">
            <div className="w-1/2 p-4 flex flex-col gap-2  animate-fadeIn bg-gray-950 text-white shadow-lg rounded-lg transform transition-all duration-700 hover:scale-[1.04]">
              <h2 className="font-semibold">SAY BINGO</h2>
              <iframe
                width="100%"
                height="100%"
                src="https://say-bingo.vercel.app/"
              ></iframe>

              <div className="flex text-[15px] font-bold  justify-between items-center">
                <a
                  target="_blank"
                  href="https://github.com/kumarlalita001/say-bingo"
                >
                  GITHUB
                </a>
                <a target="_blank" href="https://say-bingo.vercel.app/">
                  LIVE
                </a>
              </div>
            </div>
          </div>
          <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* Second Card */}
        <div className="mb-8 flex flex-col items-center animate-fadeInUp">
          <div className="flex w-full justify-start">
            <div className="w-1/2 p-4 flex flex-col gap-2  animate-fadeIn bg-gray-950 text-white shadow-lg rounded-lg transform transition-all duration-700 hover:scale-[1.04]">
              <h2>FOCUS CHECK</h2>
              <iframe
                width="100%"
                height="100%"
                src="https://focus-check-lkm-001.web.app/"
              ></iframe>

              <div className="flex text-[15px] font-bold  justify-between items-center">
                <a
                  target="_blank"
                  href="https://github.com/kumarlalita001/focus-check"
                >
                  GITHUB
                </a>
                <a target="_blank" href="https://focus-check-lkm-001.web.app/">
                  LIVE
                </a>
              </div>
            </div>
          </div>
          <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* Third Card */}
        <div className="mb-8 flex flex-col items-center animate-fadeInDown">
          <div className="flex w-full justify-end">
            <div className="w-1/2 p-4 flex flex-col gap-2  animate-fadeIn bg-gray-950 text-white shadow-lg rounded-lg transform transition-all duration-700 hover:scale-[1.04]">
              <h2>CROSS WINS</h2>
              <iframe
                width="100%"
                height="100%"
                src="https://cross-wins.web.app/"
              ></iframe>

              <div className="flex text-[15px] font-bold  justify-between items-center">
                <a
                  target="_blank"
                  href="https://github.com/kumarlalita001/cross-wins"
                >
                  GITHUB
                </a>
                <a target="_blank" href="https://cross-wins.web.app/">
                  LIVE
                </a>
              </div>
            </div>
          </div>
          <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* Fourth Card */}
        <div className="mb-8  flex flex-col items-center animate-fadeInUp">
          <div className="flex w-full justify-start">
            <div className="w-1/2 p-4 flex flex-col gap-2  animate-fadeIn bg-gray-950 text-white shadow-lg rounded-lg transform transition-all duration-700 hover:scale-[1.04]">
              <h2 className="font-semibold">QUANTUM</h2>
              <iframe
                width="100%"
                height="100%"
                src="https://quantum-001.web.app/"
              ></iframe>

              <div className="flex text-[15px] font-bold  justify-between items-center">
                <a
                  target="_blank"
                  href="https://github.com/kumarlalita001/quantum"
                >
                  GITHUB
                </a>
                <a target="_blank" href="https://quantum-001.web.app/">
                  LIVE
                </a>
              </div>
            </div>
          </div>
          <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
