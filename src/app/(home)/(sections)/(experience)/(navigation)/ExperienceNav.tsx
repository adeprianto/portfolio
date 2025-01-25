"use client";

import ExperienceNavItem from "@src/app/(home)/(sections)/(experience)/(navigation)/ExperienceNavItem";
import useWindowSize from "@src/hooks/useWindowSize";
import { JobExperience } from "@src/types/JobExperience";
import classNames from "classnames";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type CursorBottom = {
  width: number;
  left: number;
};

type CursorLeft = {
  height: number;
  top: number;
};

type ExperienceNavProps = {
  selectedJobExperience: JobExperience;
  setSelectedJobExperience: (jobExperience: JobExperience) => void;
};

export default function ExperienceNav({
  selectedJobExperience,
  setSelectedJobExperience,
}: ExperienceNavProps) {
  const isDesktopView = useRef<boolean>(null);
  const [cursorLeft, setCursorLeft] = useState<CursorLeft>({
    height: 0,
    top: 0,
  });
  const [cursorBottom, setCursorBottom] = useState<CursorBottom>({
    width: 0,
    left: 0,
  });

  const refNavItemFct = React.useRef<HTMLLIElement>({} as HTMLLIElement);
  const refNavItemDbmpr = React.useRef<HTMLLIElement>({} as HTMLLIElement);
  const refNavItemSccic = React.useRef<HTMLLIElement>({} as HTMLLIElement);
  const refNavItemIndihealth = React.useRef<HTMLLIElement>({} as HTMLLIElement);

  const setCursor = (value: JobExperience) => {
    switch (value) {
      case JobExperience.FCT:
        if (window.innerWidth < 992) {
          setCursorBottom({
            width: refNavItemFct.current.getBoundingClientRect().width,
            left: refNavItemFct.current.offsetLeft,
          });
        } else {
          setCursorLeft({
            height: refNavItemFct.current.getBoundingClientRect().height,
            top: refNavItemFct.current.offsetTop,
          });
        }

        break;
      case JobExperience.DBMPR:
        if (window.innerWidth < 992) {
          setCursorBottom({
            width: refNavItemDbmpr.current.getBoundingClientRect().width,
            left: refNavItemDbmpr.current.offsetLeft,
          });
        } else {
          setCursorLeft({
            height: refNavItemDbmpr.current.getBoundingClientRect().height,
            top: refNavItemDbmpr.current.offsetTop,
          });
        }

        break;
      case JobExperience.SCCIC:
        if (window.innerWidth < 992) {
          setCursorBottom({
            width: refNavItemSccic.current.getBoundingClientRect().width,
            left: refNavItemSccic.current.offsetLeft,
          });
        } else {
          setCursorLeft({
            height: refNavItemSccic.current.getBoundingClientRect().height,
            top: refNavItemSccic.current.offsetTop,
          });
        }

        break;
      case JobExperience.INDIHEALTH:
        if (window.innerWidth < 992) {
          setCursorBottom({
            width: refNavItemIndihealth.current.getBoundingClientRect().width,
            left: refNavItemIndihealth.current.offsetLeft,
          });
        } else {
          setCursorLeft({
            height: refNavItemIndihealth.current.getBoundingClientRect().height,
            top: refNavItemIndihealth.current.offsetTop,
          });
        }

        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setCursor(selectedJobExperience);
  }, []);

  useWindowSize(
    ({ width }) => {
      const isDesktop = width >= 992;
      if (isDesktop === isDesktopView.current) return;
      setCursor(selectedJobExperience);
      isDesktopView.current = isDesktop;
    },
    [selectedJobExperience],
  );

  const onExperienceNavItemClick = (value: JobExperience) => {
    setCursor(value);
    setSelectedJobExperience(value);
  };

  return (
    <div
      className={classNames([
        "ml-6 mt-6",
        "col-span-4",
        "lg:col-span-2 lg:col-start-2",
        "xl:col-span-3 xl:col-start-3",
      ])}
    >
      <ul
        className={classNames([
          "relative",
          "flex overflow-x-auto font-sf-mono",
          "lg:overflow-hidden",
          "lg:flex-col",
        ])}
      >
        <ExperienceNavItem
          ref={refNavItemFct}
          selectedJobExperience={selectedJobExperience}
          setSelectedJobExperience={onExperienceNavItemClick}
          value={JobExperience.FCT}
        >
          Five Corner Techno
        </ExperienceNavItem>
        <ExperienceNavItem
          ref={refNavItemDbmpr}
          selectedJobExperience={selectedJobExperience}
          setSelectedJobExperience={onExperienceNavItemClick}
          value={JobExperience.DBMPR}
        >
          Dinas Bina Marga dan Penataan Ruang Provinsi Jawa Barat
        </ExperienceNavItem>
        <ExperienceNavItem
          ref={refNavItemSccic}
          selectedJobExperience={selectedJobExperience}
          setSelectedJobExperience={onExperienceNavItemClick}
          value={JobExperience.SCCIC}
        >
          Smart City and Community Innovation Center (SCCIC) - ITB
        </ExperienceNavItem>
        <ExperienceNavItem
          ref={refNavItemIndihealth}
          selectedJobExperience={selectedJobExperience}
          setSelectedJobExperience={onExperienceNavItemClick}
          value={JobExperience.INDIHEALTH}
        >
          PT. Inditek Global Medika (Indihealth)
        </ExperienceNavItem>
        <motion.li
          className="hidden lg:absolute lg:left-0 lg:z-50 lg:block lg:w-0.5 lg:bg-blue"
          animate={{
            height: cursorLeft.height,
            top: cursorLeft.top,
          }}
        ></motion.li>
        <motion.li
          className="absolute bottom-0 z-50 h-0.5 bg-blue lg:hidden"
          animate={{
            width: cursorBottom.width,
            left: cursorBottom.left,
          }}
        ></motion.li>
      </ul>
    </div>
  );
}
