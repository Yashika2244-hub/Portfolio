'use client';

import { motion } from 'framer-motion';
import {  SiMysql, SiPostgresql, SiPython, SiTableau,  SiGit, SiZoho } from 'react-icons/si';
import { FaFileExcel } from 'react-icons/fa'; // ✅ Safe alternative
import { AiOutlineCloud } from 'react-icons/ai'; // Icon for Streamlit Cloud
import { FaChartBar } from 'react-icons/fa';



export default function AboutSection() {
  const skills = [
    { name: ' MYSQL', icon: <SiMysql  className="text-[#38BDF8] text-xl" /> },
    { name: 'Python', icon: <SiPython  className="text-[#F7DF1E] text-xl" /> },
    {name: 'Power BI', icon: <FaChartBar className="text-[#F2C811] text-xl" />},
    {name: 'Excel', icon: <FaFileExcel className="text-[#217346] text-xl" />},
    { name: 'Git & GitHub', icon: <SiGit className="text-[#F05032] text-xl" /> },
    { name: 'Tableau', icon: <SiTableau className="text-[#412991] text-xl" /> },
    { name: 'Postgresql', icon: <SiPostgresql className="text-[#E34F26] text-xl" /> },
    { name: 'Streamlit Cloud', icon: <AiOutlineCloud className="text-[#E34F26] text-xl" /> },
    { name: 'Zoho CRM', icon: <SiZoho className="text-[#E34F26] text-xl" /> }
  ];

  return (
    <section className="px-6 py-24 bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-gray-800" id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        

        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Hey, I’m <span className="text-pink-600 font-semibold">Yashika</span> —Passionate about transforming raw data into meaningful insights and interactive dashboards.  
  Currently exploring advanced tools to build solutions that simplify decision-making and drive real-world value.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-pink-300 mb-4">
          Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <motion.span
              key={skill.name}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 px-5 py-3 rounded-full text-sm font-medium text-gray-800 dark:text-white shadow-md hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_4px_rgba(236,72,153,0.5)]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {skill.icon} {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
