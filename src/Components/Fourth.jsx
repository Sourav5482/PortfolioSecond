const Fourth = () => {
    return (
        <div>
              <section
      className="min-h-screen bg-[#0e0e0e]  text-[#d9d9d9] flex flex-col md:flex-row items-center justify-between px-[10vw] py-20"
     
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex justify-start items-start md:items-center">
        <h1 className="text-[5rem] md:text-[6rem] font-semibold opacity-80 leading-none">
          (03)
        </h1>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-[2.8rem] md:text-[3rem] font-bold text-[#f5f5f5] leading-tight">
         Optimization
        </h2>

        <p className="text-base md:text-lg text-[#c9c9c9] leading-relaxed max-w-[90%]">
         Beyond handling data, I’m driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.
        </p>

        <div className="flex flex-col gap-3 mt-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium opacity-80">01</span>
            <p className="text-lg font-semibold md:text-2xl text-[#f5f5f5]">
             Data Structures & Algorithms
            </p>
          </div>
          <hr className="border-t border-[#2a2a2a]" />

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium opacity-80">02</span>
            <p className="text-lg font-semibold md:text-2xl text-[#f5f5f5]">
              DBMS, OOP, OS Fundamentals
            </p>
          </div>
          <hr className="border-t border-[#2a2a2a]" />

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium opacity-80">03</span>
            <p className="text-lg font-semibold md:text-2xl text-[#f5f5f5]">
              Data Pipelines, ETL, and Scalability
            </p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};
export default Fourth;