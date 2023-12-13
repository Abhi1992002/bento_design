import classNames from "classnames";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

type ProjectProps = {};

export const Project = ({}: ProjectProps) => {
  const leftRef = useRef(null);
  const isInViewLeft = useInView(leftRef, { margin: "0px 0px -300px 0px" });
  const rightRef = useRef(null);
  const isInViewRight = useInView(rightRef, { margin: "0px 0px -300px 0px" });

  const projectRef = useRef(null);
  const isInViewProject = useInView(projectRef, {
    margin: "0px 0px -100px 0px",
  });

  const notionRef = useRef(null);
  const isInViewNotion = useInView(notionRef, {
    margin: "0px 0px 200px 0px",
    once: true,
  });
  return (
    <div className="lg:w-[90%] max-w-[1186px] w-[95%]  grid grid-rows-13 grid-flow-row gap-2">
      {/* project heading , center */}
      <div
        ref={projectRef}
        className={classNames(
          "bg-[#131315] py-10 rounded-[30px] border border-[#262626] row-span-1 col-span-3 flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 translate-y-[100%]",
          {
            "opacity-100 translate-y-[0]": isInViewProject,
          }
        )}
      >
        <p className="  font-bold z-[1]  text-transparent text-5xl lg:text-7xl pb-2 bg-clip-text bg-gradient-to-r from-green-200  to-green-600 max-h-[110px]">
          Projects.
        </p>
        <Image
          width={142}
          height={142}
          src={"/project.png"}
          alt="project"
          className=" lg:w-[142px] w-[100px]"
        />
      </div>

      {/* notion clone */}
      <div
        ref={notionRef}
        className={classNames(
          "bg-[#131315] rounded-[30px] border  border-[#262626] flex gap-8 flex-col row-span-4 col-span-3 transition-all duration-500 ease-in-out opacity-0 translate-y-[100%]",
          {
            "opacity-100 translate-y-[0]": isInViewNotion,
          }
        )}
      >
        <div className="flex items-center mt-8 ml-8 gap-4">
          <p className="text-[40px] font-semibold ">Notion Clone.</p>
          <Image width={43} height={43} alt="smile" src={"/smile.png"} />
        </div>

        <div className="ml-8 overflow-hidden flex gap-4">
          <Image
            width={9600}
            height={5000}
            src={"/notion1.png"}
            alt="notion"
            className=" rounded-lg w-[90%]"
          />
          <Image
            width={960}
            height={500}
            src={"/notion1.png"}
            alt="notion"
            className=" rounded-lg"
          />
        </div>
        <div className="m-8 flex md:items-center gap-5 md:gap-0 items-start justify-between flex-col md:flex-row">
          <div className="flex gap-3">
            <p className="text-[#ACABAB] text-[25px] font-normal">Live Demo.</p>
            <Image
              width={33}
              height={33}
              src={"/arrow.svg"}
              alt="arrow-image"
            />
          </div>
          <div className="flex gap-3">
            <p className="text-[#ACABAB] text-[25px] font-normal">Code.</p>
            <Image
              width={33}
              height={33}
              src={"/arrow.svg"}
              alt="arrow-image"
            />
          </div>
        </div>
      </div>

      {/* course gpt */}
      <div className="bg-[#131315] rounded-[30px] border border-[#262626] row-span-4 col-span-3 lg:col-span-2 flex gap-8 flex-col">
        <div className="flex items-center mt-8 ml-8 gap-4">
          <p className="text-[30px] font-semibold ">Course GPT.</p>
        </div>

        <div className="ml-8 overflow-hidden flex gap-4">
          <Image
            width={6500}
            height={4500}
            src={"/notion1.png"}
            alt="notion"
            className=" rounded-lg w-[95%]"
          />
        </div>
        <div className="m-8 flex md:items-center gap-5 md:gap-0 items-start justify-between flex-col md:flex-row">
          <div className="flex gap-3">
            <p className="text-[#ACABAB] text-[25px] font-normal">Live Demo.</p>
            <Image
              width={33}
              height={33}
              src={"/arrow.svg"}
              alt="arrow-image"
            />
          </div>
          <div className="flex gap-3">
            <p className="text-[#ACABAB] text-[25px] font-normal">Code.</p>
            <Image
              width={33}
              height={33}
              src={"/arrow.svg"}
              alt="arrow-image"
            />
          </div>
        </div>
      </div>

      {/* reconsiler */}
      <div className="bg-[#131315] rounded-[30px] border border-[#262626] flex items-center justify-center row-span-2 col-span-3 lg:col-span-1 py-20 flex-col gap-8">
        <p className="text-[30px] font-semibold ">Reconsiler.</p>

        <div className="flex gap-3">
          <p className="text-[#ACABAB] text-[25px] font-normal">Code.</p>
          <Image width={33} height={33} src={"/arrow.svg"} alt="arrow-image" />
        </div>
      </div>

      {/* form creator */}
      <div className="bg-[#131315] rounded-[30px] border border-[#262626] flex items-center justify-center flex-col gap-4 py-10 lg:p-0 md:gap-8 row-span-4 col-span-3 lg:col-span-1 relative">
        <Image
          alt="important"
          width={44}
          height={44}
          src={"/important.png"}
          className="absolute top-[-20px] right-[-20px]"
        />
        <p className="text-[30px] font-semibold ">Form Creator.</p>
        <Image
          alt="form-creator"
          width={3300}
          height={3300}
          src={"/form.png"}
          className="w-[50%]"
        />
        <div className="flex gap-3">
          <p className="text-[#ACABAB] text-[25px] font-normal">Code.</p>
          <Image width={33} height={33} src={"/arrow.svg"} alt="arrow-image" />
        </div>
        <div className="flex gap-3">
          <p className="text-[#ACABAB] text-[25px] font-normal">Live Demo.</p>
          <Image width={33} height={33} src={"/arrow.svg"} alt="arrow-image" />
        </div>
      </div>

      {/* social media application */}
      <div className="bg-[#131315] rounded-[30px] border border-[#262626] row-span-4 col-span-3 lg:col-span-2 flex flex-col gap-8">
        <div className="flex items-center mt-8 ml-8 gap-4">
          <p className="text-[30px] font-semibold ">Course GPT.</p>
        </div>

        <div className="ml-8 overflow-hidden flex gap-4">
          <Image
            width={650}
            height={450}
            src={"/notion1.png"}
            alt="notion"
            className=" rounded-lg w-[95%]"
          />
        </div>
        <div className="m-8 flex md:items-center gap-5 md:gap-0 items-start justify-between flex-col md:flex-row">
          <div className="flex gap-3">
            <p className="text-[#ACABAB] text-[25px] font-normal">Live Demo.</p>
            <Image
              width={33}
              height={33}
              src={"/arrow.svg"}
              alt="arrow-image"
            />
          </div>
          <div className="flex gap-3">
            <p className="text-[#ACABAB] text-[25px] font-normal">Code.</p>
            <Image
              width={33}
              height={33}
              src={"/arrow.svg"}
              alt="arrow-image"
            />
          </div>
        </div>
      </div>

      {/* more */}
      <div className="bg-white rounded-[30px] border border-[#262626] row-span-2 col-span-3 lg:col-span-1 flex items-center justify-center">
        <p className="text-black text-[40px] font-bold p-10 py-32">More.</p>
      </div>
    </div>
  );
};
