import { JobExperience } from "@src/types/JobExperience";
import classNames from "classnames";
import React from "react";

type ExperienceNavItemProps = {
  ref: React.RefObject<HTMLLIElement>;
  value: JobExperience;
  selectedJobExperience: JobExperience;
  setSelectedJobExperience: (jobExperience: JobExperience) => void;
  children: React.ReactNode;
};

export default function ExperienceNavItem({
  ref,
  value,
  selectedJobExperience,
  setSelectedJobExperience,
  children,
}: ExperienceNavItemProps) {
  return (
    <li
      ref={ref}
      className={classNames([
        "flex min-w-64 items-center justify-center border-b-2 border-outline",
        "px-6 py-4",
        "cursor-pointer transition hover:bg-white/25 hover:text-blue active:bg-white/25 active:text-blue",
        "lg:min-w-0 lg:justify-start lg:border-b-0 lg:border-l-2",
        selectedJobExperience === value ? "text-blue" : "text-white",
      ])}
      onClick={() => setSelectedJobExperience(value)}
    >
      {children}
    </li>
  );
}
