import React, { useState } from "react";
import { Education, LeftNavBar, WorkExperience } from "./components";
import About from "./components/About/About";
import Project from "./components/Project/Project";

const App = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(true);

  return (
    <div className="w-full h-full flex justify-end">
      <LeftNavBar isNavBarOpen={isNavBarOpen} updateState={setIsNavBarOpen} />
      <div className="w-5/5 md:w-2/3 lg:w-3/4 bg-teal-500">
        <About updateState={setIsNavBarOpen} />
        <Education />
        <WorkExperience />
        <Project />
      </div>
    </div>
  );
};

export default App;
