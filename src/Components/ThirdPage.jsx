import React from 'react';

const ThirdPage = () => {
  return (
    
    <section
      className="min-h-screen bg-[#0e0e0e]  text-[#d9d9d9] flex flex-col md:flex-row items-center justify-between px-[10vw] py-20"
     
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex justify-start items-start md:items-center">
        <h1 className="text-[5rem] md:text-[6rem] font-semibold opacity-80 leading-none">
          (02)
        </h1>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-[2.8rem] md:text-[3rem] font-bold text-[#f5f5f5] leading-tight">
          UI/UX & Frontend
        </h2>

        <p className="text-base md:text-lg text-[#c9c9c9] leading-relaxed max-w-[90%]">
          Design is more than looks — it’s about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.
        </p>

        <div className="flex flex-col gap-3 mt-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium opacity-80">01</span>
            <p className="text-lg font-semibold md:text-2xl text-[#f5f5f5]">
            TailwindCSS, GSAP
            </p>
          </div>
          <hr className="border-t border-[#2a2a2a]" />

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium opacity-80">02</span>
            <p className="text-lg font-semibold md:text-2xl text-[#f5f5f5]">
              Figma to Code
            </p>
          </div>
          <hr className="border-t border-[#2a2a2a]" />

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium opacity-80">03</span>
            <p className="text-lg font-semibold md:text-2xl text-[#f5f5f5]">
               NextJs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;