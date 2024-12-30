import React from "react";
import cards from "../Json/Module_cards";

function Module() {
  const Cards_inside =
    "w-[6rem] h-[4rem] rounded-xl border border-b-4 border-green-800 shadow-2xl text-center";
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
      <div className="w-full h-[80vh] flex flex-wrap gap-5 py-4 overflow-y-scroll items-center">
        {cards.map((items, i) => {
          return (
            <div
              key={i}
              className="w-[23rem] h-[11rem] rounded-xl border-b-8 border-purple-900 bg-white shadow-xl ml-5"
            >
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
    </>
  );
}

export default Module;
