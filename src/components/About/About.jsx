// // src/AboutSection.js
// import React from "react";
// import Typical from "react-typical";

// const About = () => {
//   return (
//     <section className="bg-gray-900 text-white p-10 md:p-20">
//       <div className="container mx-auto">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <img
//               src="https://sudoariel.github.io/static/media/profile-pic.8b4a3f5a.jpg"
//               alt="Profile"
//               className="w-full md:w-2/3 mx-auto rounded-full"
//             />
//           </div>
//           <div className="md:w-1/2 md:pl-10">
//             <h1 className="text-4xl font-bold mb-4">Hi, I'm Ariel Andrade</h1>
//             <Typical
//               steps={[
//                 "I am a Software Developer 💻",
//                 2000,
//                 "I love coding and learning new technologies 🌐",
//                 2000,
//                 "I am passionate about open source 🌍",
//                 2000,
//               ]}
//               loop={Infinity}
//               wrapper="p"
//               className="text-xl mb-4"
//             />
//             <p className="text-lg">
//               I have a strong background in computer science and a passion for
//               creating innovative solutions to complex problems. I enjoy working
//               with modern web technologies and continuously strive to improve my
//               skills and knowledge in the field.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// src/AboutSection.js
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const [isCursorBlink, setIsCursorBlink] = useState(false);

  const handleLoopDone = () => {
    setIsCursorBlink(isCursorBlink);
  };
  return (
    <section className="bg-inherit text-white p-5 ">
      <h2 className="text-4xl    font-bold mb-8 text-shadow-xl">ABOUT</h2>
      <div className="container mx-auto ">
        {/* <div className="flex flex-col md:flex-row items-center"> */}
        {/* <div className="md:w-1/2 mb-8 md:mb-0">
            {/* <img
              src="https://sudoariel.github.io/static/media/profile-pic.8b4a3f5a.jpg"
              alt="Profile"
              className="w-full md:w-2/3 mx-auto rounded-full"
            /> */}
        {/* </div>  */}
        <h1 className="text-3xl  md:text-5xl start-0 text-shadow-2xl font-extrabold  mb-4">
          <span className="md:block  ml-[2%] md:ml-[5%]">LALIT</span>
          <span className="text-gray-800 block ml-[7%] md:ml-[15%]  text-shadow-lg">
            {" "}
            KUMAR{" "}
          </span>
          <span className=" block ml-[15%] md:ml-[25%] ">MOHANTY</span>
        </h1>
        <div className="md:w-[100%]  md:pl-10 bg-black p-10">
          <p className="text-md mb-4">
            <Typewriter
              words={[" Hello 👋"]}
              loop={1}
              cursor
              cursorStyle="."
              typeSpeed={20}
              deleteSpeed={50}
              delaySpeed={1000}
              cursorBlinking={isCursorBlink}
              onLoopDone={handleLoopDone}
            />
          </p>
          <p className="text-md mb-4">
            <Typewriter
              words={[` I am Lalit Kumar Mohanty and ${"20"} year old 💻`]}
              loop={1}
              cursor
              cursorStyle="."
              typeSpeed={30}
              deleteSpeed={70}
              delaySpeed={1000}
              cursorBlinking={isCursorBlink}
              onLoopDone={handleLoopDone}
            />
          </p>
          <p className="text-xl mb-4">
            <Typewriter
              words={[" I am a Software Developer 💻"]}
              loop={1}
              cursor
              cursorStyle="."
              cursorBlinking={isCursorBlink}
              typeSpeed={90}
              deleteSpeed={90}
              delaySpeed={1000}
              onLoopDone={handleLoopDone}
            />
          </p>
          <p className="text-lg">
            I have a strong background in computer science and a passion for
            creating innovative solutions to complex problems. I enjoy working
            with modern web technologies and continuously strive to improve my
            skills and knowledge in the field.
          </p>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
