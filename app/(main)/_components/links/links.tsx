import classNames from "classnames";
import { useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

type LinksProps = {};

export const Links = ({}: LinksProps) => {
  const leftRef = useRef(null);
  const isInViewLeft = useInView(leftRef, { margin: "0px 0px -200px 0px" });
  const rightRef = useRef(null);
  const isInViewRight = useInView(rightRef, { margin: "0px 0px -200px 0px" });
  const centerRef = useRef(null);
  const isInViewCenter = useInView(centerRef, { margin: "0px 0px -200px 0px" });
  return (
    <div className="lg:w-[90%] max-w-[1186px] w-[95%]  grid grid-rows-3 md:grid-rows-1 grid-flow-col grid-cols-6 gap-2">
      {/* left */}
      <div
        ref={leftRef}
        className={classNames(
          "bg-[#131315] rounded-[30px] border border-[#262626] row-span-1 col-span-6 md:col-span-2 p-2 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 ease-in-out opacity-0 translate-x-[-100%]",
          {
            "opacity-100 translate-x-[0%]": isInViewLeft,
          }
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
        ref={centerRef}
        className={classNames(
          "bg-[#131315] rounded-[30px] border border-[#262626] row-span-1 col-span-6 md:col-span-2 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 ease-in-out opacity-0 translate-y-[-100%]",
          {
            "opacity-100 translate-y-[0]": isInViewCenter,
          }
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
        ref={rightRef}
        className={classNames(
          "bg-[#131315] rounded-[30px] border border-[#262626] row-span-1 col-span-6 md:col-span-2 hover:bg-black hover:text-white transition-all duration-500 ease-in-out flex items-center justify-center translate-x-[100%] opacity-0",
          {
            "opacity-100 translate-x-[0%]": isInViewRight,
          }
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
