import React, { useState } from "react";
import { Education, LeftNavBar, WorkExperience } from "./components";
import About from "./components/About/About";

const App = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(true);
  console.log(setIsNavBarOpen);

  return (
    <div className="w-full h-full flex justify-end">
      {/* <div className="bg-blue-950 h-[10%]">

      </div> */}
      <LeftNavBar isNavBarOpen={isNavBarOpen} updateState={setIsNavBarOpen} />
      <div className="w-5/5 md:w-2/3 lg:w-3/4 bg-teal-500">
        <About updateState={setIsNavBarOpen} />
        <Education />
        <WorkExperience />
      </div>
    </div>
  );
};

export default App;

// src/App.js

/*
import React from "react";
import Navbar from "./components/Demo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="about" className="min-h-screen bg-blue-100 p-10">
        <h2 className="text-4xl">About Me</h2>
        <p>Content for the About Me section.</p>
      </div>
      <div id="skills" className="min-h-screen bg-green-100 p-10">
        <h2 className="text-4xl">My Skills</h2>
        <p>Content for the My Skills section.</p>
      </div>
      <div id="work-experience" className="min-h-screen bg-yellow-100 p-10">
        <h2 className="text-4xl">Work Experience</h2>
        <p>Content for the Work Experience section.</p>
      </div>
      <div id="education" className="min-h-screen bg-red-100 p-10">
        <h2 className="text-4xl">Education</h2>
        <p>Content for the Education section.</p>
      </div>
      <div id="projects" className="min-h-screen bg-purple-100 p-10">
        <h2 className="text-4xl">Projects</h2>
        <p>Content for the Projects section.</p>
      </div>
    </div>
  );
}

export default App;

*/
