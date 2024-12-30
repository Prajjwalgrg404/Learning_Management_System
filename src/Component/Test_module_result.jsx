import React from "react";
import Cards_detials from "../Json/Cards_details"

function Test_module_result() {
  return (
    <div className="ml-[3rem]">
      <div className="flex items-center gap-[5.8rem] outline-none mt-6">
        Select Course
        <select className="w-[13.5rem] px-2 py-2 border " name="Select Course">
          <option>Select Course</option>
          {Cards_detials.map((items) => {
            return <option>{items.Starting}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Test_module_result;
