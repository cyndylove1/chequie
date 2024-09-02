import React from "react";

const Roadmap = () => {
  return (
    <section className="py-16 lg:mt-[6rem] mt-[5rem] ">
      <div className="mb-16 text-center">
        <p className="text-[15px] text-gray-500 uppercase">Roadmap</p>
        <h2 className="lg:text-5xl text-2xl fw-medium lg:w-[35%] w-full mx-auto ">
          We’re on a goal to<span className="text-[#008A48] "> 1,000 </span>Mates
        </h2>
      </div>
      <div className=" relative flex justify-center">
        <div className="">
          <div className="absolute hidden lg:block lg:top-[5px] -top-0 h-[1px] bg-gray-300 xl:w-[65rem] lg:w-[60rem]"></div>
          <div className="block lg:hidden absolute h-full w-[1px] bg-gray-300 left-1/2 transform -translate-x-1/2"></div>
          <div className="flex items-center justify-between lg:w-[60rem] xl:w-[65rem] h-[20rem] flex-col lg:flex-row mx-4 lg:mx-0">
            <div className="group md:text-left relative flex flex-col items-center flex-1 text-center">
              <div className="block lg:hidden h-4 w-[1px] bg-gray-300"></div>
              <div className="bg-white rounded-full border border-gray-300 w-12 h-12 flex justify-center items-center relative z-10 group-hover:bg-[#998ee6] group-hover:text-white transition-colors duration-300 xl:-top-10 lg:-top-6 md:top-0">
                <p className="group-hover:text-white text-sm font-medium">01</p>
              </div>
              <div className="block lg:hidden h-4 w-[1px] bg-gray-300 "></div>
              <div className="bg-white p-6 border-[1px] border-gray-300 text-center shadow-sm w-full mt-[2px] group-hover:bg-[#998ee6] group-hover:text-white transition-colors duration-300 rounded-[8px] md:rounded-none">
                <h3 className="group-hover:text-white text-lg font-bold">How we began</h3>
                <p className="group-hover:text-white pb-6 mt-4 text-gray-500">
                  We identified a problem! Many Nigerians got scammed of their
                  hard-earned monies through Ajo scams and we couldn’t sit by and
                  just watch. We had to do something and started working to fix
                  it!
                </p>
              </div>
            </div>

            <div className="group md:text-left relative flex flex-col items-center flex-1 text-center">
              <div className="block lg:hidden h-4 w-[1px] bg-gray-300"></div>
              <div className="group-hover:bg-[#f58088] group-hover:text-white relative z-10 flex items-center justify-center w-12 h-12 transition-colors duration-300 bg-white border border-gray-300 rounded-full xl:-top-10 lg:-top-6 md:top-0">
                <p className="group-hover:text-white text-sm font-medium">02</p>
              </div>
              <div className="block lg:hidden h-4 w-[1px] bg-gray-300"></div>
              <div className="mt-[2px] bg-white p-6 border-[1px] border-gray-300 text-center shadow-sm w-full group-hover:bg-[#f58088] group-hover:text-white transition-colors duration-300 rounded-[8px] md:rounded-none">
                <h3 className="group-hover:text-white text-lg font-bold">The Solution</h3>
                <p className="group-hover:text-white pb-6 mt-4 text-gray-500">
                  Thanks to all the First Mates who put in hard work day and
                  night, the solution is here and we are happy to share how
                  everyone can do Ajo the safe way and also save conveniently with
                  Chequemate.
                </p>
              </div>
            </div>

            <div className="group md:text-left relative flex flex-col items-center flex-1 text-center">
              <div className="block lg:hidden h-4 w-[1px] bg-gray-300"></div>
              <div className="bg-white rounded-full border border-gray-300 w-12 h-12 flex justify-center items-center relative z-10 group-hover:bg-[#3385f7] group-hover:text-white transition-colors duration-300 xl:-top-10 lg:-top-6 md:top-0">
                <p className="group-hover:text-white text-sm font-medium">03</p>
              </div>
              <div className="block lg:hidden h-4 w-[1px] bg-gray-300"></div>
              <div className="mt-[2px] bg-white p-6 border-[1px] border-gray-300 text-center shadow-sm w-full group-hover:bg-[#3385f7] group-hover:text-white transition-colors duration-300 rounded-[8px] md:rounded-none">
                <h3 className="group-hover:text-white text-lg font-bold">The Mates</h3>
                <p className="group-hover:text-white pb-6 mt-4 text-gray-500">
                  We plan to grow with you because we do this FOR YOU! We specially
                  invite you to walk with us on this journey to giving Nigerians
                  (and Africans) a safe way to do Ajo and save in an unstable
                  economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
