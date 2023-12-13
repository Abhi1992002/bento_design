import classNames from "classnames";
import { useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

type LinksProps = {};

export const Links = ({}: LinksProps) => {
  return (
    <div className="lg:w-[90%] max-w-[1186px] w-[95%]  grid grid-rows-3 md:grid-rows-1 grid-flow-col grid-cols-6 gap-2">
      {/* left */}
      <div
        className={classNames(
          "bg-[#131315] rounded-[30px] border border-[#262626] row-span-1 col-span-6 md:col-span-2 p-2 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200 ease-in-out"
        )}
      >
        <Link
          href={"#"}
          className="text-[23px] md:text-[30px] text-white font-medium "
        >
          X.
        </Link>
      </div>

      {/* center */}
      <div
        className={classNames(
          "bg-[#131315] rounded-[30px] border border-[#262626] row-span-1 col-span-6 md:col-span-2 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200 ease-out"
        )}
      >
        <Link
          href={"#"}
          className="text-[23px] md:text-[30px] text-white font-medium"
        >
          Linkdin.
        </Link>
      </div>

      {/* right */}
      <div
        className={classNames(
          "bg-[#131315] rounded-[30px] border border-[#262626] row-span-1 col-span-6 md:col-span-2 hover:bg-black hover:text-white transition-all duration-200 ease-in-out flex items-center justify-center "
        )}
      >
        <Link
          href={"#"}
          className="text-[23px] md:text-[30px] text-white font-medium"
        >
          Github.
        </Link>
      </div>
    </div>
  );
};
