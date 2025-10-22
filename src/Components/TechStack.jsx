import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TechStack = ({ section }) => {
    const contentRef = useRef(null);
    const titleRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {
        // Initialize elements as invisible
        gsap.set([titleRef.current, contentRef.current, skillsRef.current.children], { 
            opacity: 0,
            y: 20
        });

        // Create a timeline for sequential animations
        const tl = gsap.timeline({
            defaults: { 
                ease: "power2.out",
                duration: 0.8
            }
        });

        tl.to(titleRef.current, { opacity: 1, y: 0 })
          .to(contentRef.current, { opacity: 1, y: 0 }, "-=0.6")
          .to(skillsRef.current.children, { 
              opacity: 1, 
              y: 0,
              stagger: 0.1 
          }, "-=0.4");

    }, []);

    return (
        <div className="h-full w-full flex items-center">
            <div className="container mx-auto px-6">
                <div className='flex flex-col md:flex-row gap-12 md:gap-24'>
                    <div className='md:w-1/2 space-y-8'>
                        <div ref={titleRef}>
                            <p className='text-2xl text-gray-400 mb-4'>({section.id})</p>
                            <h1 className='text-5xl md:text-6xl font-bold text-white'>{section.title}</h1>
                        </div>
                        <div ref={contentRef}>
                            <p className='text-lg md:text-xl text-[#D1D1C7] leading-relaxed max-w-2xl'>
                                {section.description}
                            </p>
                        </div>
                    </div>
                    <div ref={skillsRef} className='md:w-1/2 space-y-8'>
                        {section.projects.map((project, index) => (
                            <div key={index} className="border-t border-gray-800 pt-6">
                                <div className='flex items-start gap-6'>
                                    <span className='text-2xl text-gray-400 pt-1'>{String(index + 1).padStart(2, '0')}</span>
                                    <div>
                                        <h2 className='text-2xl md:text-3xl font-bold text-white'>{project.name}</h2>
                                        <p className='text-[#D1D1C7] mt-2'>{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TechStack;