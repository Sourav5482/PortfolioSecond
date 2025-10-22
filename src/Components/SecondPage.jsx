import React from "react";
import PillNav from "./PillNav";

const SecondPage = () => {
  return (
    <section
      
      className="min-h-screen bg-[#0e0e0e] rounded-t-4xl text-[#d9d9d9] flex flex-col md:flex-row items-center justify-between px-[10vw] py-0"
      data-scroll-section
    >
      

      {/* Left Section */}
      <div className="w-full md:w-1/2 flex justify-start items-start md:items-center">
        <h1 className="text-[5rem] md:text-[6rem] font-semibold opacity-80 leading-none">
          (01)
        </h1>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-[2.8rem] md:text-[3rem] font-bold text-[#f5f5f5] leading-tight">
          Full-Stack Development
        </h2>

        <p className="text-base md:text-lg text-[#c9c9c9] leading-relaxed max-w-[90%]">
          From frontend interactions to backend APIs, I build complete web
          solutions. I work with modern stacks to deliver apps that are
          scalable, maintainable, and ready for real-world users.
        </p>

        <div className="flex flex-col gap-3 mt-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium opacity-80">01</span>
            <p className="text-lg md:text-2xl font-semibold text-[#f5f5f5]">
              React, Node.js, Express.js
            </p>
          </div>
          <hr className="border-t border-[#2a2a2a]" />

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium opacity-80">02</span>
            <p className="text-lg md:text-2xl font-semibold text-[#f5f5f5]">
              REST APIs, Firebase, Docker
            </p>
          </div>
          <hr className="border-t border-[#2a2a2a]" />

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium opacity-80">03</span>
            <p className="text-lg font-semibold md:text-2xl text-[#f5f5f5]">
              Git, GitHub, Postman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
