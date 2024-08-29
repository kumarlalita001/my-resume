import React from "react";
import Heading from "../HeadingComp/Heading";

const WorkExperience = () => {
  return (
    // <div className="bg-teal-500 p-5 " id="experience">
    //   <Heading name={"EXPERIENCE"} />

    //   <div className="relative">
    //     <div className="absolute h-full border-l-4 border-white left-1/2  transform -translate-x-1/2"></div>

    //     <div className="mb-8 flex flex-col items-center animate-fadeInDown ">
    //       <div className="flex w-full justify-end">
    //         <div className="w-1/2 p-4 animate-fadeIn bg-white shadow-lg rounded-lg transform transition-all duration-700 hover:scale-[1.04]">
    //           <h3 className="text-xl font-semibold">
    //             Frontend Developer Intern
    //           </h3>
    //           <p>The INTERNS</p>
    //           <span className="block mt-2 text-gray-500">
    //             April 2024 - Present
    //           </span>
    //         </div>
    //       </div>
    //       <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
    //     </div>
    //     <div className="mb-8 flex flex-col items-center animate-fadeInUp ">
    //       <div className="flex w-full justify-start">
    //         <div className="w-1/2 p-4 animate-fadeIn  bg-white shadow-lg rounded-lg transform transition-all duration-700 hover:scale-[1.04]">
    //           <h3 className="text-xl font-semibold">
    //             Frontend Developer Intern
    //           </h3>
    //           <p>GLUCIAN PVT LMTD.</p>
    //           <span className="block mt-2 text-gray-500">
    //             Oct 2023 - March 2024
    //           </span>
    //         </div>
    //       </div>
    //       <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
    //     </div>
    //     {/* <div className="mb-8 flex flex-col items-center animate-fadeInDown ">
    //       <div className="flex w-full justify-end">
    //         <div className="w-1/2 p-4 bg-white animate-fadeIn shadow-lg rounded-lg transform transition-all duration-700 hover:scale-[1.04]">
    //           <h3 className="text-xl font-semibold">Junior Developer</h3>
    //           <p>Web Innovators</p>
    //           <span className="block mt-2 text-gray-500">
    //             Jul 2017 - Dec 2019
    //           </span>
    //         </div>
    //       </div>
    //       <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
    //     </div> */}
    //   </div>
    // </div>

    <div className="bg-teal-500 p-5" id="experience">
      <Heading name={"EXPERIENCE"} />
      <div className="relative">
        {/* Curved Line SVG */}
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 48 0 Q 56  49, 48 66 T 52 120"
            stroke="black"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* First timeline entry */}
        <div className="mb-8 flex flex-col items-center animate-fadeInUp">
          {/* <div className="flex w-full">
            <div className="w-full flex md:w-1/2 p-4 bg-black text-white shadow-lg rounded-lg transform transition-transform duration-700 hover:scale-[1.04]">
              <div className="w-[25%] h-full">
                <img
                  className="h-[100%] w-[100%] rounded-full object-cover"
                  src="giftLogo.bmp"
                  alt="giftLogo"
                />
              </div>
              <div className="w-[75%] p-4">
                <h3 className="text-lg font-bold">Bachelor of Technology</h3>
                <p className="text-sm">
                  Gandhi Institute for Technology (GIFT)
                </p>
                <p className="font-semibold">CGPA : 8.5</p>
                <span className="block text-gray-500">2021 - 2025</span>
              </div>
            </div>
          </div>
          <div className="w-6 h-6 bg-black border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div> */}
        </div>

        <div className="mb-8 flex flex-col items-center animate-fadeInUp">
          <div className="flex w-full">
            <div className="w-full flex md:w-1/2 p-4 bg-black text-white shadow-lg rounded-lg transform transition-transform duration-700 hover:scale-[1.04]">
              <div className="w-[25%] h-full">
                <img
                  className="h-[100%] w-[100%] bg-black filter invert rounded-full object-cover "
                  src="image.png"
                  alt="webBocket"
                />
              </div>
              <div className="w-[75%] p-4 ">
                <h3 className="text-lg font-bold">
                  Software Developer Engineer{" "}
                </h3>
                <a
                  target="_blank"
                  href="https://www.webbocket.com/"
                  className="text-sm mt-2 "
                >
                  WebBocket
                </a>
                <span className="block text-gray-500 mt-2">
                  Sept 2024 - PRESENT
                </span>
              </div>
            </div>
          </div>
          <div className="w-6 h-6 bg-black border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* Second timeline entry */}
        <div className="mb-8 flex flex-col items-center animate-fadeInDown">
          <div className="flex w-full justify-end">
            <div className="w-full flex md:w-1/2 p-4 bg-black text-white shadow-lg rounded-lg transform transition-transform duration-700 hover:scale-[1.04]">
              <div className="w-[25%] h-full">
                <img
                  className="h-[100%] w-[100%] filter  bg-black  rounded-full object-cover "
                  src="theinterns.webp"
                  alt="webBocket"
                />
              </div>
              <div className="w-[75%] p-4 ">
                <h3 className="text-lg font-bold">Frontend Developer Intern</h3>
                <a
                  target="_blank"
                  href="https://theinterns.org.in/"
                  className="text-sm mt-2 "
                >
                  The Interns
                </a>
                <span className="block text-gray-500 mt-2">
                  April 2024 - June 2024
                </span>
              </div>
            </div>
          </div>
          <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
