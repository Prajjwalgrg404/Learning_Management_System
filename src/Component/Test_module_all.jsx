import React from "react";

function Test_module_all() {
    const Big_div =
    "w-[40%] h-[88vh] shadow-[10px_3px_60px_-18px_rgba(0,0,0,0.3)] border mx-6 rounded-lg mb-6";
  const div_inside =
    "flex justify-between items-center text-[#33308B] px-8 py-4 border-b-2 border-grey-100 font-semibold text-[1.25rem]";
  return (
    <div>
      <div className="flex">
        <div className={Big_div}>
          <h1 className="text-center text-[2rem] tracking-tight mb-4 py-4 font-bold text-[#A8A8A8]">
            Frontend Development
          </h1>
          <div>
            <div className={div_inside}>
              <h2>HTML, CSS</h2>
              <i className="fa-solid fa-angle-down text-black p-2"></i>
            </div>
            <div className={div_inside}>
              <h2>Javascript, Reactjs</h2>
              <i className="fa-solid fa-angle-down text-black p-2"></i>
            </div>
          </div>
        </div>
        <div className={Big_div}>
          <h1 className="text-center text-[2rem] tracking-tight mb-4 py-4 font-bold text-[#A8A8A8]">
            MERN STACK
          </h1>
          <div>
            <div className={div_inside}>
              <h2>Javascript</h2>
              <i className="fa-solid fa-angle-down text-black p-2"></i>
            </div>
            <div className={div_inside}>
              <h2>Reactjs</h2>
              <i className="fa-solid fa-angle-down text-black p-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test_module_all;
