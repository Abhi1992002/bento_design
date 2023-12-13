import React from "react";
import Marquee from "react-fast-marquee";
import { FileCode2 } from "lucide-react";
type SkillMarqueeProps = {};

export const SkillMarquee = ({}: SkillMarqueeProps) => {
  return (
    <div className="w-[85%] h-[70%] flex items-center justify-around flex-col">
      <div className="w-[100%]">
        <Marquee pauseOnHover speed={20} gradient gradientColor="#131315">
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
        </Marquee>
      </div>
      <div className="w-[100%]">
        <Marquee
          pauseOnHover
          direction="right"
          speed={20}
          gradient
          gradientColor="#131315"
        >
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
        </Marquee>
      </div>
      <div className="w-[100%]">
        <Marquee pauseOnHover speed={20} gradient gradientColor="#131315">
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
          <FileCode2 className="w-14 h-14 text-[#ACABAB] ml-[40px] hover:cursor-pointer hover:text-white" />
        </Marquee>
      </div>
    </div>
  );
};
