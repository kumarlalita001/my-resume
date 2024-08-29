import React from "react";
import "./style.css";
import Heading from "../HeadingComp/Heading";

const SkillsSection = () => {
  const skills = [
    "TeamWork",
    "React",
    "Tailwind",
    "HTML",
    "LeaderShip",
    "CSS",
    "JavaScript",
    "Redux",
  ];

  return (
    <div className="p-5" id="skills">
      <Heading name={"SKILLS"} />
      <div className="flex flex-col items-center justify-center h-80 bg-teal-500">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 bg-gray-900 text-gray-300 rounded-full flex items-center justify-center">
            <span className="font-bold">Skills</span>
          </div>

          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-item absolute flex p-10 text-sm font-bold bg-black text-white items-center justify-center w-12 h-12 rounded-full shadow-lg`}
              style={{
                transform: `rotate(${
                  index * (360 / skills.length)
                }deg) translate(8rem) rotate(-${
                  index * (360 / skills.length)
                }deg)`,
                animationDelay: `${index * 1.2}s`,
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
