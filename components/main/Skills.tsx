"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-12 h-full relative overflow-hidden pb-20 py-20"
    >
      <SkillText />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
        {/* Frontend Development */}
        <motion.div
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Frontend Development
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            <SkillDataProvider src="/html.png" width={60} height={60} index={0} name="HTML5" />
            <SkillDataProvider src="/css.png" width={60} height={60} index={1} name="CSS3" />
            <SkillDataProvider src="/js.png" width={60} height={60} index={2} name="JavaScript" />
            <SkillDataProvider src="/ts.png" width={60} height={60} index={3} name="TypeScript" />
            <SkillDataProvider src="/react.png" width={60} height={60} index={4} name="React" />
            <SkillDataProvider src="/next.js.svg" width={60} height={60} index={5} name="Next.js" />
            <SkillDataProvider src="/tailwind.png" width={60} height={60} index={6} name="Tailwind CSS" />
          </div>
        </motion.div>

        {/* Backend Development */}
        <motion.div
          variants={slideInFromRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Backend Development
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            <SkillDataProvider src="/node.js.svg" width={60} height={60} index={7} name="Node.js" />
            <SkillDataProvider src="/express.png" width={60} height={60} index={8} name="Express.js" />
            <SkillDataProvider src="/python.svg" width={60} height={60} index={9} name="Python" />
            <SkillDataProvider src="/mongodb.png" width={60} height={60} index={10} name="MongoDB" />
            <SkillDataProvider src="/mysql.png" width={60} height={60} index={11} name="MySQL" />
            <SkillDataProvider src="/PostgresSQL.svg" width={60} height={60} index={12} name="PostgreSQL" />
          </div>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                Programming Languages
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            <SkillDataProvider src="/js.png" width={60} height={60} index={13} name="JavaScript" />
            <SkillDataProvider src="/python.svg" width={60} height={60} index={15} name="Python" />
            <SkillDataProvider src="/java.svg" width={60} height={60} index={16} name="Java" />
            <SkillDataProvider src="/C++.svg" width={60} height={60} index={17} name="C++" />
          </div>
        </motion.div>

        {/* Tools & DevOps */}
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Tools & DevOps
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            <SkillDataProvider src="/Git.svg" width={60} height={60} index={18} name="Git" />
            <SkillDataProvider src="/Github.svg" width={60} height={60} index={19} name="GitHub" />
            <SkillDataProvider src="/vscode.svg" width={60} height={60} index={22} name="VS Code" />
            <SkillDataProvider src="/figma.png" width={60} height={60} index={23} name="Figma" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
