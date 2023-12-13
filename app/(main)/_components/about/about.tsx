import React, { useRef } from "react";
import { Contribution } from "./contributions";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { contributionInitialAnimation } from "@/animation/about";
import classNames from "classnames";

type AboutProps = {};

export const About = ({}: AboutProps) => {
  const leftRef = useRef(null);
  const isInViewLeft = useInView(leftRef, { margin: "0px 0px -300px 0px" });
  const rightRef = useRef(null);
  const isInViewRight = useInView(rightRef, { margin: "0px 0px -300px 0px" });

  return (
    <div className="lg:w-[90%] w-[95%] max-w-[1186px]  grid grid-rows-3 lg:grid-rows-5 grid-flow-col grid-cols-1 lg:grid-cols-6 gap-2">
      {/* contribution */}
      <motion.div
        initial={contributionInitialAnimation.hidden}
        animate={contributionInitialAnimation.visible}
        className="bg-[#131315] rounded-[30px] border border-[#262626] lg:row-span-2 row-span-1 lg:col-span-6 col-span-1"
      >
        <Contribution />
      </motion.div>

      {/* left */}
      <div
        ref={leftRef}
        className={classNames(
          "bg-[#131315] rounded-[30px] border border-[#262626] lg:row-span-3 row-span-1 lg:col-span-2 flex flex-col text-center items-center justify-center col-span-1 opacity-0 transition-all duration-500 ease-in-out translate-x-[-100%]",
          { "opacity-100 translate-x-[0%]": isInViewLeft }
        )}
      >
        <Image
          width={125}
          height={125}
          src={"/profile.png"}
          alt="profile-image"
        />
        <div>
          <p className="text-[40px] text-white font-semibold">Abhimanyu</p>
          <p className="text-[#999898] font-semibold text-[40px]">Yadav</p>
        </div>
      </div>

      {/* right */}
      <div
        ref={rightRef}
        className={classNames(
          "bg-[#131315] rounded-[30px] border border-[#262626] lg:row-span-3 row-span-1 col-span-1 text-center lg:text-left lg:col-span-4 p-5 pb-10  opacity-0 translate-x-[100%] transition-all duration-500 ease-in-out",
          {
            "opacity-100 translate-x-[0%]": isInViewRight,
          }
        )}
      >
        <p className="text-[#999898] text-[20px] md:text-[25px] lg:text-[30px] font-medium ">
          I am a <span className="text-white"> computer science</span> undergrad
          at <span className="text-white">BITS Pilani</span>, celebrating .
          Passionate about exploring the intersections of{" "}
          <span className="text-white">technology</span> and creativity, my
          journey has been marked by a{" "}
          <span className="text-white">
            commitment to learning and innovation.{" "}
          </span>
        </p>
        <Image
          width={43}
          height={43}
          src={"/arrow.svg"}
          alt="arrow-image"
          className="absolute right-5 bottom-5 w-[10%] sm:w-[43px]"
        />
      </div>
    </div>
  );
};
