import React from "react";
import Batch_Cards from "./Batch_Cards";
import Batch_completed from "./Batch_completed";
import { Counter } from "../Contextapi/Context";
import { useContext } from "react";
import Batch_upcoming from "./Batch_upcoming";

function Batch() {
  const button_css =
    "px-6 py-2 rounded-lg border border-[#012951] text-[#012951] hover:bg-[#012951] hover:text-white ml-6 ";

  const { change, setchange } = useContext(Counter);
  console.log(change);

  return (
    <>
      <div className="mt-6">
        <button
          onClick={() => {
            setchange(0);
          }}
          className={button_css}
        >
          <i className="fa-regular fa-calendar-days mr-2"></i>Current
        </button>
        <button
          onClick={() => {
            setchange(1);
          }}
          className={button_css}
        >
          <i className="fa-regular fa-calendar-plus mr-2"></i>Upcoming
        </button>
        <button
          onClick={() => {
            setchange(2);
          }}
          className={button_css}
        >
          <i className="fa-regular fa-calendar-check mr-2"></i>Completed
        </button>
      </div>

      <div className="cards px-6 mt-6 flex items-center gap-5 flex-wrap">
        {change === 0 ? <Batch_Cards /> : ""}
        {change === 1 ? <Batch_upcoming /> : ""}
        {change === 2 ? <Batch_completed /> : ""}
      </div>
    </>
  );
}

export default Batch;
