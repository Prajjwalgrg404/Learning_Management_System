import React from "react";
import Module_cards from "../Json/Module_cards";

function Test_module_create() {
  return (
    <div className="ml-[3rem] font-semibold">
      <div className="flex gap-[7rem] outline-none items-center mt-6">
        Test Name
        <input
          className="px-4 border rounded py-2"
          type="text"
          placeholder="Test Name"
        />
      </div>
      <div className="flex gap-[5.8rem] outline-none items-center mt-6">
        Test Duration
        <input
          className="px-4 border rounded py-2"
          type="text"
          placeholder="Test Duration"
        />
      </div>
      <div className="flex items-center gap-[5.8rem] outline-none mt-6">
        Select Course
        <select className="w-[13.5rem] px-2 py-2 border "  name="Select Course">
          <option>Select Course</option>
          {Module_cards.map((items) => {
            return<option>{items.course}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Test_module_create;
