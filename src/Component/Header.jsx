import React from "react";
import photo from "../assets/logo.jpg";

function Header() {
  return (
    <>
      <header className="w-full h-[3.5rem] shadow-2xl bg-white">
        <div className="h-full w-full px-[7rem] flex justify-between">
          <img className="h-full" src={photo} alt="" />
          <div className="flex items-center">
            <i className="fa-regular fa-bell mr-10 text-[1.5rem]"></i>
            <h3 className="px-[0.8rem] py-[0.1rem] mr-4 text-[1.6rem] rounded-full bg-[#101855] text-white">P</h3>
            <p className="mr-2 font-semibold">Hi, Prajjwal <i className="fa-solid fa-chevron-down"></i></p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
