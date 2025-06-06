"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer Intern",
      company: "Celebal Technologies",
      location: "India",
      duration: "May 2025 - Present",
      description: [
        "Working on scalable full-stack web applications",
        "Integrating backend APIs and managing database operations",
        "Implementing responsive UI designs with modern frameworks",
        "Collaborating in agile development environments"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"]
    },
    {
      title: "Python Developer Intern",
      company: "Indication Instruments Limited (Veethree)",
      location: "India",
      duration: "Jan 2024 - Apr 2024",
      description: [
        "Developed an Average Fuel Economy system using PCAN-Basic and Python",
        "Created GUI in Tkinter for real-time fuel data monitoring",
        "Displayed readings using a custom timer and data visualization approach",
        "Worked with the design team on system UI components like a sidebar"
      ],
      technologies: ["Python", "Tkinter", "PCAN-Basic", "GUI Development"]
    },
  ];

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center px-6 lg:px-20 py-20 w-full relative overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center mb-16"
      >
        <div className="Welcome-box py-3 px-6 border border-[#7042f88b] opacity-[0.9] flex items-center hover:bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 rounded-full backdrop-blur-sm bg-black/20 w-fit mb-8">
          <SparklesIcon className="text-[#b49bff] mr-3 h-5 w-5" />
          <h1 className="Welcome-text text-sm font-medium tracking-wide text-white">
            Professional Journey
          </h1>
        </div>
        
        <h2 className="text-4xl lg:text-5xl text-white font-bold text-center mb-4">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Experience</span>
        </h2>
        
        <p className="text-lg text-gray-300 text-center max-w-2xl">
          My professional journey through various internships and projects, building real-world solutions and gaining valuable industry experience.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="w-full max-w-6xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? slideInFromLeft(0.3) : slideInFromRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row items-center gap-8 mb-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Connector */}
            <div className="hidden lg:flex flex-col items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
              {index < experiences.length - 1 && (
                <div className="w-0.5 h-24 bg-gradient-to-b from-purple-500/50 to-transparent mt-4"></div>
              )}
            </div>

            {/* Experience Card */}
            <div className="flex-1 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="mb-2 sm:mb-0">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-purple-400 font-semibold">{exp.company}</p>
                </div>
                <div className="flex flex-col sm:items-end text-sm text-gray-400">
                  <div className="flex items-center gap-2 mb-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start gap-2">
                    <span className="text-purple-500 mt-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:border-purple-500/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
