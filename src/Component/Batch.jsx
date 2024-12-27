import React from "react";
import Batch_Cards from "./Batch_Cards";

function Batch() {
  const button_css =
    "px-6 py-2 rounded-lg border border-[#012951] text-[#012951] hover:bg-[#012951] hover:text-white ml-6 ";
  return (
    <>
    
    <div className="w-auto h-[100vh] pl-[17.5rem] mt-4">
      <div className=" border rounded-full mt-2 w-[17rem] bg-white ml-6">
        <i className="fa-solid fa-magnifying-glass pl-3"></i>
        <input
          className="px-2 py-2 outline-none border-none rounded-full"
          type="text" placeholder="Search Here..."
        />
      </div>
      <div className="mt-6">
        <button className={button_css}>
          <i className="fa-regular fa-calendar-days mr-2"></i>Current
        </button>
        <button className={button_css}>
          <i className="fa-regular fa-calendar-plus mr-2"></i>Upcoming
        </button>
        <button className={button_css}>
          <i className="fa-regular fa-calendar-check mr-2"></i>Completed
        </button>
      </div>

      <div className="cards px-6 mt-6 flex gap-5 flex-wrap">
        <Batch_Cards/>
      </div>
    </div>
    </>
  );
}

export default Batch;
