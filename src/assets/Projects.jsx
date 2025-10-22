import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const demoProjects = [
  {
    title: 'Project 1 — Immersive Shop',
    description:
      'A modern e‑commerce experience with buttery‑smooth transitions and performant media.',
    video: '/videos/project1.mp4',
  },
  {
    title: 'Project 2 — Portfolio Engine',
    description:
      'A dynamic portfolio with modular sections, CMS content, and fine‑tuned motion design.',
    video: '/videos/project2.mp4',
  },
  {
    title: 'Project 3 — Realtime Tasks',
    description:
      'Collaborative task management with realtime presence, comments, and notifications.',
    video: '/videos/project3.mp4',
  },
];

const Projects = ({ projects = demoProjects }) => {
  const containerRef = useRef(null);
  const layerRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Ensure refs array length matches
    layerRefs.current = layerRefs.current.slice(0, projects.length);

    const ctx = gsap.context(() => {
      // Initial states: all layers off‑screen, alternating side; first will slide in first
      layerRefs.current.forEach((el, i) => {
        const fromSide = i % 2 === 0 ? -100 : 100; // even index (1st, 3rd) from left; odd from right
        gsap.set(el, { xPercent: fromSide, opacity: 0 });
      });

      // One pinned timeline controlling all slides
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${projects.length * 100}%`, // one viewport per project
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
        defaults: { ease: 'power2.out', duration: 1 },
      });

      projects.forEach((_, i) => {
        tl.to(layerRefs.current[i], { xPercent: 0, opacity: 1 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-black">
      {/* Stacked absolute layers; each one is a full‑viewport section */}
      <div className="absolute inset-0">
        {projects.map((proj, i) => {
          const videoLeft = i % 2 === 0; // odd sections -> video left, even -> video right (0-indexed)
          return (
            <div
              key={i}
              ref={(el) => (layerRefs.current[i] = el)}
              className="absolute inset-0"
              style={{ zIndex: 10 + i }}
            >
              <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 md:px-10">
                {/* Video side */}
                <div
                  className={
                    videoLeft
                      ? 'w-full md:w-1/2 order-1'
                      : 'w-full md:w-1/2 order-2'
                  }
                >
                  <div className="aspect-video w-full bg-[#111] rounded-xl overflow-hidden shadow-xl ring-1 ring-white/10">
                    <video
                      className="w-full h-full object-cover"
                      src={proj.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>

                {/* Text side */}
                <div
                  className={
                    videoLeft
                      ? 'w-full md:w-1/2 order-2'
                      : 'w-full md:w-1/2 order-1'
                  }
                >
                  <div className="max-w-xl md:max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                      {proj.title}
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-zinc-300 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
