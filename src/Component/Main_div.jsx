import { Routes, Route } from "react-router-dom";
import Module from "./Module";
import Batch from "./Batch";
import Test_module from "./Test_module";
import Resources from "./Resources";

function Main_div() {
  return (
    <>
      <div className=" w-auto h-screen ml-[17.5rem] mt-[3rem] bg-white">
        <Routes>
          <Route path="/" element={<Module />} />
          <Route path="/batch" element={<Batch />} />
          <Route path="/test_module" element={<Test_module />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </>
  );
}

export default Main_div;
