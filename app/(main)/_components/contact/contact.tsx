import React from "react";

type ContactProps = {};

export const Contact = ({}: ContactProps) => {
  return (
    <>
      <div
        id="contact"
        className="lg:w-[90%] max-w-[1186px] w-[95%] mb-8  h-[370px] grid grid-rows-5 grid-flow-rows gap-2"
      >
        <div className="bg-[#131315] rounded-[30px] border border-[#262626] row-span-4 flex items-center justify-around flex-col pb-10">
          <p className="text-white text-[40px] md:text-[60px] font-bold">
            Want to Connect.
          </p>
          <button className="text-white bg-gradient-to-t text-[25px] md:text-[30px] font-medium p-4 sm:px-20 rounded-full from-[#3fae2a] to-[#6CC04A]">
            email@abhimanyu.tech
          </button>
        </div>
        <div className="bg-[#131315] rounded-[30px] border border-[#262626] row-span-1 flex items-center justify-center sm:justify-between px-8 ">
          <p className="text-[18px] hidden sm:block sm:text-[20px] md:text-[24px] font-bold">
            abhimanyu.
          </p>
          <p className="text-[18px] sm:text-[20px] md:text-[24px] font-normal text-[#ACABAB]">
            all rights reserved. 2023
          </p>
        </div>
      </div>
    </>
  );
};
