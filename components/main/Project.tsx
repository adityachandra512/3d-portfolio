"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import Button from "../sub/Button";

const projectData = [
  {
    id: 1,
    title: "Restaurant App",
    description: "A modern restaurant app with a clean and interactive design using mern.",
    imageSrc: "/Screenshot (105).png",
    link: "https://github.com/adityachandra512/RestaurantsApp",
  },
  {
    id: 2,
    title: "Student Portal",
    description: "Interactive and user-friendly student portal for schools using opencv.",
    imageSrc: "/Screenshot (119).png",
    link: "https://github.com/adityachandra512/student-portal",
  },
  {
    id: 3,
    title: "Mini Blog",
    description: "A simple blog website with a clean and modern design using django.",
    imageSrc: "/Screenshot (120).png",
    link: "https://github.com/adityachandra512/miniblog",
  },
];

function Projects() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-15 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start" id="projects">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
          My Projects
        </h1>

        {/* Cards Implementation */}
        <div className="flex flex-wrap gap-6  justify-center">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={slideInFromLeft(index * 0.3)}
              className="relative bg-[#1C1C1E] rounded-lg shadow-lg overflow-hidden w-[350px] max-w-full border border-[#2A0E61] transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h1 className="text-2xl font-semibold text-white">
                  {project.title}
                </h1>
                <p className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {project.description}
                </p>
                <div className="mt-3">
                  <Button href={project.link}/>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
