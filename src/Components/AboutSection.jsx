// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-gray-200 flex flex-col md:flex-row items-center justify-between p-10 md:p-20 overflow-hidden"
    >
      {/* LEFT SIDE - HEADING (staggered, no color animation) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="flex flex-col text-6xl md:text-8xl font-extrabold leading-tight uppercase tracking-tight mb-10 md:mb-0"
      >
        <motion.span variants={item}>About Me</motion.span>
       
      </motion.div>

      {/* RIGHT SIDE - CONTENT (staggered, no color animation) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="md:w-1/2 space-y-6 text-gray-300"
      >
        <motion.p variants={item} className="text-lg md:text-xl leading-relaxed">
          Hi, I’m <span className="text-white font-semibold">Sourav Das</span>,
          a passionate <span className="text-white font-semibold">Full Stack Developer</span> with a passion for building modern, responsive, and user-friendly web applications. I specialize in HTML, CSS, JavaScript, and React on the frontend, and work with Node.js, Express, and MongoDB on the backend to create complete, efficient, and scalable solutions.
        </motion.p>

        <motion.p variants={item} className="text-lg md:text-xl leading-relaxed">
          I’m currently pursuing my Bachelor of Computer Applications (BCA) at Midnapore College. I enjoy turning ideas into reality through clean code, interactive design, and smooth functionality. My goal is to continue growing as a developer, contribute to impactful projects, and build digital experiences that make a difference.
        </motion.p>

        <motion.div variants={item} className="mt-4">
          <Magnetic strength={30}>
            <button
              className="px-6 py-3 bg-gray-100 text-black font-semibold rounded-full shadow-lg"
            >
              View My Work
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
