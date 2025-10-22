// src/components/SkillsSection.jsx
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlobCursor from "./BlobCursor";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const languages = [
    "Python",
    "SQL",
    "C++",
    "Java",
    "Typescript",
    "JavaScript",
    "Git",
    "Postman",
    "Docker",
    "Firebase",
  ];

  const frameworks = [
    "React",
    "Node.js",
    "Express.js",
    "Flask",
    "Bootstrap",
    "jQuery",
    "TailwindCSS",
    "Framer Motion",
    "GSAP",
  ];

  const coreConcepts = [
    "DSA",
    "DBMS",
    "OOP",
    "Operating Systems",
    "System Design",
  ];

  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const leftLines = leftRef.current?.querySelectorAll("span") || [];
      const heading = rightRef.current?.querySelector("h1");
      const subheads = rightRef.current?.querySelectorAll("h2") || [];
      const listItems = rightRef.current?.querySelectorAll("ul li") || [];

      gsap.set(leftLines, { y: 30, opacity: 0 });
      if (heading) gsap.set(heading, { y: 20, opacity: 0 });
      gsap.set(subheads, { y: 15, opacity: 0 });
      gsap.set(listItems, { y: 10, opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });

      tl.to(leftLines, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 })
        .to(heading, { y: 0, opacity: 1, duration: 0.8 }, "-=0.2")
        .to(subheads, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.2")
        .to(listItems, { y: 0, opacity: 1, duration: 0.5, stagger: 0.02 }, "-=0.2");

      // Ensure positions are recalculated after layout
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-black text-gray-200 flex flex-col md:flex-row justify-between items-start p-10 md:p-20">
      {/* LEFT SIDE */}
      <div className="absolute inset-0">
      <BlobCursor
  blobType="circle"
  fillColor="#5227FF"
  trailCount={3}
  sizes={[60, 125, 75]}
  innerSizes={[20, 35, 25]}
  innerColor="rgba(255,255,255,0.8)"
  opacities={[0.6, 0.6, 0.6]}
  shadowColor="rgba(0,0,0,0.75)"
  shadowBlur={5}
  shadowOffsetX={10}
  shadowOffsetY={10}
  filterStdDeviation={30}
  useFilter={true}
  fastDuration={0.1}
  slowDuration={0.5}
  zIndex={0}
  hideOnLeave={true}
/>
      </div>
      <div ref={leftRef} className="relative z-10 flex flex-col text-6xl md:text-7xl font-extrabold leading-tight uppercase space-y-2 tracking-tight mt-16">
        <span>Developer</span>
        <span>Designer</span>
        <span>Creator/</span>
      </div>

      {/* RIGHT SIDE */}
  <div ref={rightRef} className="relative mt-16 z-10  md:mt-16 md:w-1/2 flex flex-col">
        {/* SKILLS HEADING */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-100 mb-10 text-center">
          Skills
        </h1>

        {/* SKILL CATEGORIES */}
        <div className="flex flex-col md:flex-row gap-10 text-sm md:text-base">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-400">
              Languages & Tools
            </h2>
            <ul className="space-y-1">
              {languages.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-400">
              Frameworks & Libraries
            </h2>
            <ul className="space-y-1">
              {frameworks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-400">
              Core CS Concepts
            </h2>
            <ul className="space-y-1">
              {coreConcepts.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
