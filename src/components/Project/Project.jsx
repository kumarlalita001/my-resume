import React from "react";
import Heading from "../HeadingComp/Heading";
import sayBingo from "../../assets/sayBingo.png";
import focusCheck from "../../assets/focuscheck.png";
import quantum from "../../assets/quantum.png";
import crossWins from "../../assets/crossWins.png";

const projects = [
  {
    title: "SAY BINGO",
    image: sayBingo,
    description: [
      "A fun multiplayer bingo game.",
      "Real-time gameplay with friends with room creation feature",
      "Built with React and Firebase.",
    ],
    github: "https://github.com/kumarlalita001/say-bingo",
    live: "https://say-bingo.vercel.app/",
  },
  {
    title: "FOCUS CHECK",
    image: focusCheck,
    description: [
      "Enhance focus with a Pomodoro timer.",
      "Track productivity over time.",
      "Built using React and Tailwind.",
    ],
    github: "https://github.com/kumarlalita001/focus-check",
    live: "https://focus-check-lkm-001.web.app/",
  },
  {
    title: "CROSS WINS",
    image: crossWins,
    description: [
      "A tic-tac-toe variant with power-ups.",
      "Features like multiplayer , room creation and online/offline tracking.",
      "Smooth animations and interactive UI.",
    ],
    github: "https://github.com/kumarlalita001/cross-wins",
    live: "https://cross-wins.web.app/",
  },
  {
    title: "QUANTUM",
    image: quantum,
    description: [
      "A Social Media Platform",
      "Features like Post Creation, Image Upload, Like ,Commenting, and more.",
      "Built with React ,Tailwindcss and Firebase.",
    ],
    github: "https://github.com/kumarlalita001/quantum",
    live: "https://quantum-001.web.app/",
  },
];

const Project = () => {
  return (
    <div className="p-5" id="projects">
      <Heading name={"PROJECTS"} />
      <div className="relative flex flex-col gap-16">
        {/* Timeline Line */}
        <div className="absolute left-1/2 w-2 bg-white h-full transform -translate-x-1/2"></div>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex w-full items-center ${
              index % 2 === 0 ? "justify-end" : "justify-start"
            } animate-fadeIn`}
          >
            <div className="relative w-full md:w-1/2 p-5 bg-gray-950 text-white shadow-lg rounded-lg transform transition-all duration-700 hover:scale-[1.02]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="mt-3 text-xl font-semibold">{project.title}</h2>
              <ul className="mt-2 list-disc pl-4 text-sm text-gray-300">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="mt-4 flex text-sm font-bold justify-between items-center">
                <a target="_blank" href={project.github} className="text-teal-400 hover:underline">
                  GITHUB
                </a>
                <a target="_blank" href={project.live} className="text-teal-400 hover:underline">
                  LIVE
                </a>
              </div>
            </div>
            {/* Timeline Node */}
            <div className="absolute w-6 h-6 bg-black border-4 border-teal-500 rounded-full left-1/2 transform -translate-x-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
