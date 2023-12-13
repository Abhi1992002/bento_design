import Image from "next/image";
import React from "react";
import SimpleMap from "./map";
import { motion } from "framer-motion";
import { heroInitialAnimation } from "@/animation/hero";
type HeroProps = {};

export const Hero = ({}: HeroProps) => {
  return (
    <motion.div
      initial={heroInitialAnimation.hidden}
      animate={heroInitialAnimation.visible}
      className="w-[95%] max-w-[1186px] lg:w-[90%] grid grid-rows-4 grid-flow-col gap-2"
    >
      <div className="bg-[#131315] rounded-[30px] border border-[#262626] relative h-auto xl:row-span-4 xl:col-span-1 row-span-2 col-span-1">
        <Image
          src={"/face.png"}
          width={131}
          height={142}
          className="relative top-3 left-0 sm:left-4"
          alt="face"
        />
        <Image
          src={"/arrow.svg"}
          width={53}
          height={53}
          alt="arrow"
          className="absolute right-3 top-3"
        />

        <div className="ml-3 sm:ml-10 mb-10 text-[32px] sm:text-[35px] md:text-[41.87px]">
          <span className="text-neutral-400  font-bold">I am a</span>
          <span className="text-white  font-bold">
            {" "}
            <br />
            Full Stack Web <br />
            Developer{" "}
          </span>
          <span className="text-neutral-400 font-bold">from </span>
          <span className="text-white font-bold">India</span>
        </div>
      </div>
      <div className="bg-[#131315] relative rounded-[30px] border min-w-[135px] border-[#262626] xl:row-span-2 xl:col-span-2 row-span-1 col-span-1">
        <SimpleMap />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-4 border-white rounded-full bg-green-500/30 flex items-center p-4 justify-center">
          <Image src={"/face2.png"} width={70} height={72} alt="face2" />
        </div>
      </div>
      <div className="bg-[#131315] rounded-[30px] border border-[#262626] xl:row-span-2 xl:col-span-2 flex items-center relative justify-center row-span-1 col-span-1">
        <p className="  font-bold z-[1]  text-transparent text-7xl md:text-8xl bg-clip-text bg-gradient-to-r from-green-200 to-green-600">
          Connect.
        </p>
      </div>
    </motion.div>
  );
};
