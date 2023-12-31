import Image from "next/image";
import React, { useRef } from "react";
import { SkillMarquee } from "./marquee";
import { useInView } from "framer-motion";
import classNames from "classnames";

type SkillsProps = {};

export const Skills = ({}: SkillsProps) => {
  return (
    <div className="lg:w-[90%] max-w-[1186px] w-[95%]  grid grid-rows-4 md:grid-rows-1 grid-flow-col grid-cols-6 gap-2">
      {/* left */}
      <div
        className={classNames(
          "bg-[#131315] rounded-[30px] border border-[#262626] row-span-3 md:row-span-1 col-span-6 md:col-span-4 flex items-center justify-center "
        )}
      >
        <SkillMarquee />
      </div>

      {/* right */}
      <div
        className={classNames(
          "bg-[#131315] rounded-[30px] border border-[#262626] md:row-span-1 row-span-1 col-span-6 md:col-span-2 flex items-center justify-center flex-row md:flex-col p-8 gap-8 "
        )}
      >
        <p className=" text-[50px] sm:text-[60px] text-[#eac182] font-bold">
          Skills.
        </p>
        <Image
          width={209}
          height={195}
          alt="brain"
          src="/brain.png"
          className="w-[100px] md:w-[209px]"
        />
      </div>
    </div>
  );
};
