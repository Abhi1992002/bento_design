import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { yVariant } from "../../../../animation/navigation";
type NavigationProps = {};

export const Navigation = ({}: NavigationProps) => {
  return (
    <>
      <motion.div
        initial={yVariant.hidden}
        animate={yVariant.visible}
        className="w-[95%] max-w-[1186px] lg:w-[90%]  h-[58px] grid grid-rows-1 grid-flow-col gap-2"
      >
        <div className="bg-[#131315] rounded-[30px] border border-[#262626] row-span-1 col-span-1 flex items-center justify-between px-8">
          <p className="text-[24px] font-bold">abhimanyu.</p>
          <div className="lg:flex gap-8 hidden">
            <Link href={"#"} className="text-[21px] font-semibold">
              home.
            </Link>
            <Link href={"#"} className="text-[21px] font-semibold">
              skills.
            </Link>
            <Link href={"#"} className="text-[21px] font-semibold">
              projects.
            </Link>
            <Link href={"#"} className="text-[21px] font-semibold">
              contact.
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};
