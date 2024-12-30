import React from "react";
import Batch_Cards from "./Batch_Cards";
import Batch_completed from "./Batch_completed";
import { Counter } from "../Contextapi/Context";
import { useContext } from "react";
import Batch_upcoming from "./Batch_upcoming";

function Batch() {
  const button_css =
    "px-6 py-2 rounded-lg border border-[#012951] text-[#012951] hover:bg-[#012951] hover:text-white ml-6 ";
  const click_css =
    "px-6 py-2 rounded-lg border border-[#012951] text-[#012951] bg-[#012951] text-white ml-6 ";

  const { change, setchange } = useContext(Counter);
  // console.log(change);

  return (
    <>
      <div className="py-2">
        <div className=" border rounded-full mt-8 w-[17rem] bg-white ml-6 shadow-lg">
          <i className="fa-solid fa-magnifying-glass pl-3"></i>
          <input
            className="px-2 py-2 outline-none border-none rounded-full"
            type="text"
            placeholder="Search Here..."
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          className={`${button_css} ${change === 0 ? click_css : ""}`}
          onClick={() => {
            setchange(0);
          }}
        >
          <i className="fa-regular fa-calendar-days mr-2"></i>Current
        </button>
        <button
          className={`${button_css} ${change === 1 ? click_css : ""}`}
          onClick={() => {
            setchange(1);
          }}
        >
          <i className="fa-regular fa-calendar-plus mr-2"></i>Upcoming
        </button>
        <button
          className={`${button_css} ${change === 2 ? click_css : ""}`}
          onClick={() => {
            setchange(2);
          }}
        >
          <i className="fa-regular fa-calendar-check mr-2"></i>Completed
        </button>
      </div>

      <div className="h-[65vh] cards px-6 py-4 flex items-center gap-4 z5 flex-wrap overflow-y-scroll">
        {change === 0 ? <Batch_Cards /> : ""}
        {change === 1 ? <Batch_upcoming /> : ""}
        {change === 2 ? <Batch_completed /> : ""}
      </div>
    </>
  );
}

export default Batch;
