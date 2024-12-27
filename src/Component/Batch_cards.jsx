import React from 'react'
import Cards_details from "../Json/Cards_details";

function Batch_Cards() {
  return (
    <>
         {Cards_details.map((items) => {
                return (
                  <>
                      <div className="w-[25rem] h-[19rem] bg-white rounded-3xl border border-t-8 border-[#012951] shadow-2xl">
                        <div className="flex justify-between px-6 mt-6">
                          <h3 className="text-blue-900 font-semibold">
                            {items.Starting}
                          </h3>
                          <h3>
                            <i className="fa-solid fa-graduation-cap"></i> {items.people}
                          </h3>
                        </div>
                        <div className="flex flex-col gap-5 px-6 mt-4 justify-center font-semibold">
                          <h2>
                            <i className="fa-solid fa-graduation-cap mr-2"></i>{items.Batch}
                          </h2>
                          <h2>
                            <i className="fa-solid fa-user mr-2"></i> {items.name}
                          </h2>
                          <h2>
                            <i className="fa-regular fa-calendar-days mr-2"></i>{" "}
                            {items.Dates}
                          </h2>
                          <h2>
                            <i className="fa-solid fa-clock mr-2"></i> {items.time}
                          </h2>
                        </div>
                        <div className="border border-dashed mx-6 mt-4"></div>
                        <div className="mt-2">
                          <button className="px-6 py-2 rounded-lg border bg-blue-900 hover:bg-[#012951] text-white ml-6">
                            View Detials
                          </button>
                        </div>
                      </div>
                  </>
                );
              })}
    </>
  )
}

export default Batch_Cards