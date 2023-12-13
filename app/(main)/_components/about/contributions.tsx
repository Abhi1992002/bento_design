"use client";
import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { useMediaQuery } from "usehooks-ts";

type ContributionProps = {};

export const Contribution = ({}: ContributionProps) => {
  const small = useMediaQuery("(max-width: 768px) and (min-width:2px)");
  const medium = useMediaQuery("(max-width: 1024px) and (min-width:769px)");
  const lg = useMediaQuery("(max-width: 1090px) and (min-width:769px)");
  const xl = useMediaQuery("(max-width: 1330px) and (min-width:1091px)");

  const [width, setWidth] = useState(14.7);

  useEffect(() => {
    if (small) {
      setWidth(7);
    } else if (medium) {
      setWidth(9);
    } else if (lg) {
      setWidth(11);
    } else if (xl) {
      setWidth(13);
    } else {
      setWidth(14.7);
    }
  }, [small, lg, xl, medium, width]);
  return (
    <div className="w-[100%] h-[100%] flex items-center justify-center">
      <GitHubCalendar
        username="abhi1992002"
        year={2023}
        blockRadius={6}
        colorScheme={"light"}
        blockSize={width}
        hideMonthLabels={small ? false : true}
        hideTotalCount={small ? false : true}
        hideColorLegend={true}
        blockMargin={5}
        style={{ fontWeight: 500, fontSize: "16px" }}
      />
    </div>
  );
};
