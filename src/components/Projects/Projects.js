import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";


function Projects() {
  return (
    <>
      {/* 🔹 Reversed Rounded Hill Divider with 180° Gradient */}
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 1440 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hillGradient" x1="100%" y1="010%" x2="0%" y2="100%">
            <stop offset="100%" stopColor="#000000" />   {/* top color */}
            <stop offset="0%" stopColor="#000000" />     {/* bottom color */}
          </linearGradient>
        </defs>

        <path
          d="M0,0 V100 Q360,200 720,100 T1440,100 V0 H0 Z"
          fill="url(#hillGradient)" 
        ></path>
      </svg>

      {/* 🔹 Projects Section */}
      <div className="ProjectWrapper" id="projects">
        <div className="Container" style={{ textAlign: "center" }}>
          


          <div className="SectionTitle">Projects</div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
