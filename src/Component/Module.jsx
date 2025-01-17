import React, { useState } from "react";
import cards from "../Json/Module_cards";
// import { Counter } from "../Contextapi/Context";
// import { useContext } from "react";

function Module() {
  const [card, setcard] = useState(cards);
  const [input, setinput] = useState("");
  
  const getVal = (event) => {
    const inputval = event.target.value.toLowerCase(); // Convert to lowercase for case-insensitive search
    setinput(inputval);

    if (inputval === "") {
      // If input is empty, reset to all cards
      setcard(cards);
    } else {
      // Filter cards based on the input
      const filtered = cards.filter((item) =>
        item.course.toLowerCase().includes(inputval)
      );

      if (filtered.length === 0) {
        // If no matches are found, set to an empty array
        setcard([]);
      } else {
        // Otherwise, set to the filtered cards
        setcard(filtered);
      }
    }
  };


  ////////////////

  const Cards_inside =
    "w-[6rem] h-[4rem] rounded-xl border border-b-4 border-green-800 shadow-2xl text-center";
  return (
    <>
      <div className="py-2">
        <div className=" border rounded-full mt-8 w-[17rem] bg-white ml-6 shadow-lg">
          <i className="fa-solid fa-magnifying-glass pl-3"></i>
          <input
            onInput={getVal}
            value={input}
            className="px-2 py-2 outline-none border-none rounded-full"
            type="text"
            placeholder="Search Here..."
          />
          {/* <button onClick={getVal}>Filter</button> */}
        </div>
      </div>
      <div className="w-full h-[80vh] flex flex-wrap gap-5 py-4 overflow-y-scroll items-center">
        {card.length > 0? (card.map((items, i) => {
          // console.log(items);
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
        })) : <h2>No data found</h2>}
      </div>
    </>
  );
}

export default Module;
