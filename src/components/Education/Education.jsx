// import React from "react";
// import Heading from "../HeadingComp/Heading";

// const EducationTimeline = () => {
//   return (
//     <div className="bg-teal-500 p-5 " id="education">
//       <Heading name={"EDUCATION"} />
//       <div className="relative">
//         <div className="absolute h-full border-l-4  border-black left-1/2 transform -translate-x-1/2"></div>
//         <div className="mb-8 flex flex-col items-center animate-fadeInUp">
//           <div className="flex w-full ">
//             <div className="w-full flex  md:w-1/2 p-4 bg-black text-white shadow-lg rounded-lg transform transition-transform duration-700 hover:scale-[1.04]">
//               <div className="w-[25%] h-full ">
//                 <img
//                   className="h-[100%] bg-black  w-[100%]  rounded-full  object-cover"
//                   src="giftLogo.bmp"
//                   alt="giftLogo"
//                 />
//               </div>

//               <div className="w-[75%] p-4">
//                 <h3 className="text-lg font-bold">Bachelor of Technology</h3>
//                 <p className="text-sm">
//                   Gandhi Institute for Technology (GIFT)
//                 </p>
//                 <p className="font-semibold">CGPA : 8.5</p>
//                 <span className="block  text-gray-500 ">2021 - 2025</span>
//               </div>
//             </div>
//           </div>
//           <div className="w-6 h-6 bg-black  border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
//         </div>

//         <div className="mb-8 flex flex-col items-center animate-fadeInDown">
//           <div className="flex w-full justify-end">
//             <div className="w-full flex  md:w-1/2 p-4 bg-black text-white shadow-lg rounded-lg transform transition-transform duration-700 hover:scale-[1.04]">
//               <div className="w-[25%] h-full ">
//                 <img
//                   className="h-[100%] bg-cover bg-black filter invert w-[100%]  rounded-full "
//                   src="gvjcLogo.jpg"
//                   alt="gvjcLogo"
//                 />
//               </div>
//               <div className="w-[75%] p-4">
//                 <h3 className="text-lg font-bold text-wrap">
//                   Intermediate (+2)
//                 </h3>
//                 <p className="text-sm">Gyana Vikash Higher Secondary School </p>
//                 <p className="font-semibold"> Percentage : 89%</p>
//                 <span className="block  text-gray-500">2019 - 2021</span>
//               </div>
//             </div>
//           </div>
//           <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EducationTimeline;

import React from "react";
import Heading from "../HeadingComp/Heading";

const EducationTimeline = () => {
  return (
    <div className="bg-teal-500 p-5" id="education">
      <Heading name={"EDUCATION"} />
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
          <div className="w-6 h-6 bg-black border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* Second timeline entry */}
        <div className="mb-8 flex flex-col items-center animate-fadeInDown">
          <div className="flex w-full justify-end">
            <div className="w-full flex md:w-1/2 p-4 bg-black text-white shadow-lg rounded-lg transform transition-transform duration-700 hover:scale-[1.04]">
              <div className="w-[25%] h-full">
                <img
                  className="h-[100%] w-[100%] rounded-full object-cover filter invert"
                  src="gvjcLogo.jpg"
                  alt="gvjcLogo"
                />
              </div>
              <div className="w-[75%] p-4">
                <h3 className="text-lg font-bold">Intermediate (+2)</h3>
                <p className="text-sm">Gyana Vikash Higher Secondary School</p>
                <p className="font-semibold">Percentage : 89%</p>
                <span className="block text-gray-500">2019 - 2021</span>
              </div>
            </div>
          </div>
          <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
