import React from "react";
import { Counter } from "../Contextapi/Context";
import { useContext } from "react";
import Test_module_all from "./Test_module_all";
import Test_module_create from "./Test_module_create";
import Test_module_result from "./Test_module_result";

function Test_module() {
  const { change, setchange } = useContext(Counter);
  const Button_click =
    "px-6 py-2 rounded-lg border border-[#012951] text-[#012951] hover:bg-[#012951] hover:text-white ml-6 ";
    const Button_effect = "px-6 py-2 rounded-lg border border-[#012951] bg-[#012951] text-white ml-6 ";
  
  return (
    <div>
      <div className="px-6 py-9">
        <button
          onClick={() => {
            setchange(0);
          }}
          className={`${Button_click} ${change === 0 ? Button_effect : ""}`}
        >
          All Tests
        </button>
        <button
          onClick={() => {
            setchange(1);
          }}
          className={`${Button_click} ${change === 1 ? Button_effect : ""}`}
        >
          Create Test
        </button>
        <button
          onClick={() => {
            setchange(2);
          }}
          className={`${Button_click} ${change === 2 ? Button_effect : ""}`}
        >
          Test Results
        </button>
      </div>

      {change === 0 ? <Test_module_all /> : ""}
      {change === 1 ? <Test_module_create /> : ""}
      {change === 2 ? <Test_module_result /> : ""}
    </div>
  );
}

export default Test_module;
