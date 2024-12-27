import React from "react";

import { Routes, Route } from "react-router-dom";
import Module from "./Module"
import Batch from "./Batch";

function Main_div() {
  return (
    <>
      <div className="bg-white w-auto h-[100vh] ml-[17.5rem] mt-4">
        <div className="py-2">
          <div className=" border rounded-full mt-2 w-[17rem] bg-white ml-6 shadow-lg">
            <i className="fa-solid fa-magnifying-glass pl-3"></i>
            <input
              className="px-2 py-2 outline-none border-none rounded-full"
              type="text"
              placeholder="Search Here..."
            />
          </div>
          <Routes>
            <Route path="/" element={<Module />} />
            <Route path="/batch" element={<Batch />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Main_div;
