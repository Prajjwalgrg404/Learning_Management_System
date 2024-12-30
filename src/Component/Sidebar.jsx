import React from "react";
import { Counter } from "../Contextapi/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const text_effects = "py-4 hover:bg-[#012951] hover:text-white rounded-md";
  const not_active = "py-4 bg-[#012951] text-white rounded-md";
  const { count, setCount } = useContext(Counter);
  // console.log(count)
  return (
    <section>
      <div className="h-[85vh] w-[15rem] shadow-2xl bg-white fixed top-[4.5rem] left-5 overflow-hidden cursor-pointer">
        <div className="text-center pt-4 font-semibold">
          <Link to="/">
           <h2
            className={`${text_effects} ${count === 1 ? not_active : ""}`}
            onClick={() => setCount(1)}
          >
            Module
          </h2>
          </Link>
          <Link to="/batch">
          <h2
            className={`${text_effects} ${count === 2 ? not_active : ""}`}
            onClick={() => setCount(2)}
          >
            Batch
          </h2>
          </Link>
          <Link to="/test_module">
          <h2
            className={`${text_effects} ${count === 3 ? not_active : ""}`}
            onClick={() => setCount(3)}
          >
            Test Module
          </h2>
          </Link>
          <Link to="/resources">
          <h2
            className={`${text_effects} ${count === 4 ? not_active : ""}`}
            onClick={() => setCount(4)}
          >
            Resources
          </h2>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
