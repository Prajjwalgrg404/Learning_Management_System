import React from "react";
import cards from "../Json/Module_cards";

function Module() {
  const Cards_inside =
    "w-[6rem] h-[4rem] rounded-xl border border-b-4 border-green-800 shadow-2xl text-center";
  return (
    
      <div className="w-full h-full flex flex-wrap gap-5 items-center py-5">
        {cards.map((items) => {
          return (
            <div className="w-[23rem] h-[11rem] rounded-xl border-b-8 border-purple-900 bg-white drop-shadow-2xl ml-5">
              <div className="flex px-8 py-4 justify-between">
                <h2 className="text-[1.3rem] font-semibold text-purple-900">
                  {items.course}
                </h2>
                <i className="fa-light fa-pencil text-black"></i>
              </div>
              <div className="flex px-4 gap-3">
                <div className={Cards_inside}>
                  <h3 className="mt-1">Duration</h3>
                  <h3 className="font-semibold">{items.duration}</h3>
                </div>
                <div className={Cards_inside}>
                  <h3 className="mt-1">Total topics</h3>
                  <h3 className="font-semibold">{items.topics}</h3>
                </div>
                <div className={Cards_inside}>
                  <h3 className="mt-1">Fees</h3>
                  <h3 className="font-semibold">{items.Fees}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
  
  );
}

export default Module;
