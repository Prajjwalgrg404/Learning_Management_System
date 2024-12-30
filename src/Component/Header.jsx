import React from "react";
import photo from "../assets/logo.jpg";
import { Counter } from "../Contextapi/Context";
import { useContext } from "react";

function Header() {
  const { open, setopen } = useContext(Counter);
  // const { Toggle, setToggle } = useContext(Counter);

  const Switch = () => {
    setopen(!open);
  };

  return (
    <>
      <header className="w-full fixed top-0 z-10 shadow-2xl bg-white">
        <div className=" w-full px-[7rem] flex justify-between">
          <img className="h-[3.5rem]" src={photo} alt="" />
          <div className="flex items-center cursor-pointer">
            <i className="fa-regular fa-bell mr-10 text-[1.5rem]"></i>
            <div className="flex items-center ">
              <h3 className="px-[0.8rem] py-[0.1rem] mr-4 text-[1.6rem] rounded-full bg-[#101855] text-white">
                P
              </h3>
              <div onClick={Switch}>
                <p className="mr-2 font-semibold">
                  Hi, Prajjwal <i className="fa-solid fa-chevron-down"></i>
                </p>
                <div
                  className={`w-[26rem] h-[22rem] bg-white z-20 absolute right-4 ${
                    !open ? "top-[-30rem]" : "top-[3.5rem]"
                  } rounded-lg px-4 py-8`}
                >
                  <div className=" bg-[#101855] text-white rounded-full absolute top-[-0.5rem] left-[10rem] w-[0.5rem] h-[0.5rem] p-7 flex items-center justify-center text-[2.5rem] font-semibold">
                    P
                  </div>
                  <div className="w-full h-[9rem] rounded-lg border flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-[1.5rem]  text-[#101855]">
                      Prajjwal
                    </h3>
                    <h3 className="text-[#999999]">aryangrg020@gmail.com</h3>
                    <h3 className="text-[#999999]">9389485079</h3>
                  </div>
                  <div className="py-2">
                    <div className="flex justify-between border rounded-lg py-2 px-4 mb-2">
                      <div className="flex items-center">
                        <i class="fa-regular fa-comment text-green-400"></i>
                        <h3 className="pl-3">Chat Support</h3>
                      </div>
                      <div>
                      <i class="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>

                    <div className="flex justify-between border rounded-lg py-2 px-4 mb-2">
                      <div className="flex items-center">
                      <i class="fa-solid fa-info"></i>
                        <h3 className="pl-3">Help Desk</h3>
                      </div>
                      <div>
                      <i class="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>

                   <div className="flex justify-between  border rounded-lg py-2 px-4 mb-2">
                      <div className="flex items-center">
                      <i class="fa-solid fa-right-from-bracket"></i>
                        <h3 className="pl-3">Logout</h3>
                      </div>
                      <div>
                      <i class="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        onClick={Switch}
        className={`backdrop fixed top-[3.5rem] h-screen w-full bg-[rgba(0,0,0,0.3)] ${
          open ? "block" : "hidden"
        } overflow-hidden z-[2]`}
      ></div>
    </>
  );
}

export default Header;
