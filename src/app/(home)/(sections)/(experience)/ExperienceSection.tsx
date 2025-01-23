"use client";

import ItemDbmprJob from "@src/app/(home)/(sections)/(experience)/ItemDbmprJob";
import ItemFiveCornerJob from "@src/app/(home)/(sections)/(experience)/ItemFiveCornerJob";
import ItemIndihealthJob from "@src/app/(home)/(sections)/(experience)/ItemIndihealthJob";
import ItemSccicJob from "@src/app/(home)/(sections)/(experience)/ItemSccicJob";
import classNames from "classnames";
import { useState } from "react";

enum JobExperience {
  FCT = "FCT",
  DBMPR = "DBMPR",
  SCCIC = "SCCIC",
  INDIHEALTH = "INDIHEALTH",
}

export default function ExperienceSection() {
  const [selectedJobExperience, setSelectedJobExperience] = useState(
    JobExperience.FCT,
  );

  const _showJobExperience = (jobExperience: JobExperience) => {
    switch (jobExperience) {
      case JobExperience.FCT:
        return <ItemFiveCornerJob />;
      case JobExperience.DBMPR:
        return <ItemDbmprJob />;
      case JobExperience.SCCIC:
        return <ItemSccicJob />;
      case JobExperience.INDIHEALTH:
        return <ItemIndihealthJob />;
    }
  };

  return (
    <section
      className={classNames([
        "mt-40",
        "w-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl",
        "mx-auto",
      ])}
    >
      <div className="grid grid-cols-4 gap-6 lg:grid-cols-8 xl:grid-cols-12">
        <div className="col-span-4 mx-6 flex items-center justify-center gap-4 lg:col-span-4 lg:col-start-2 xl:col-span-5 xl:col-start-3">
          <span className="font-sf-mono text-title-large font-bold text-yellow">
            02. Experience
          </span>
          <div className="h-0.5 grow bg-white"></div>
        </div>
        <div
          className={classNames([
            "col-span-4 mt-6 overflow-x-auto",
            "lg:col-span-2 lg:col-start-2 lg:overflow-hidden",
            "xl:col-span-3 xl:col-start-3",
          ])}
        >
          <div
            className={classNames(["flex px-6 font-sf-mono", "lg:flex-col"])}
          >
            <div
              className={classNames([
                "flex min-w-64 items-center justify-center",
                "border-b-2 p-4",
                "cursor-pointer transition hover:bg-white/25 hover:text-blue active:bg-white/25 active:text-blue",
                "lg:min-w-0 lg:justify-start lg:border-b-0 lg:border-l-2",
                selectedJobExperience === JobExperience.FCT
                  ? "border-blue text-blue"
                  : "border-outline text-white",
              ])}
              onClick={() => setSelectedJobExperience(JobExperience.FCT)}
            >
              Five Corner Techno
            </div>
            <div
              className={classNames([
                "flex min-w-64 items-center justify-center",
                "border-b-2 p-4",
                "cursor-pointer transition hover:bg-white/25 hover:text-blue active:bg-white/25 active:text-blue",
                "lg:min-w-0 lg:justify-start lg:border-b-0 lg:border-l-2",
                selectedJobExperience === JobExperience.DBMPR
                  ? "border-blue text-blue"
                  : "border-outline text-white",
              ])}
              onClick={() => setSelectedJobExperience(JobExperience.DBMPR)}
            >
              Dinas Bina Marga dan Penataan Ruang Provinsi Jawa Barat
            </div>
            <div
              className={classNames([
                "flex min-w-64 items-center justify-center",
                "border-b-2 p-4",
                "cursor-pointer transition hover:bg-white/25 hover:text-blue active:bg-white/25 active:text-blue",
                "lg:min-w-0 lg:justify-start lg:border-b-0 lg:border-l-2",
                selectedJobExperience === JobExperience.SCCIC
                  ? "border-blue text-blue"
                  : "border-outline text-white",
              ])}
              onClick={() => setSelectedJobExperience(JobExperience.SCCIC)}
            >
              Smart City and Community Innovation Center (SCCIC) - ITB
            </div>
            <div
              className={classNames([
                "flex min-w-64 items-center justify-center",
                "border-b-2 p-4",
                "cursor-pointer transition hover:bg-white/25 hover:text-blue active:bg-white/25 active:text-blue",
                "lg:min-w-0 lg:justify-start lg:border-b-0 lg:border-l-2",
                selectedJobExperience === JobExperience.INDIHEALTH
                  ? "border-blue text-blue"
                  : "border-outline text-white",
              ])}
              onClick={() => setSelectedJobExperience(JobExperience.INDIHEALTH)}
            >
              PT. Inditek Global Medika (Indihealth)
            </div>
          </div>
        </div>
        <div className="col-span-4 mx-6 mt-6 space-y-2 lg:col-span-4 xl:col-span-5">
          {_showJobExperience(selectedJobExperience)}
        </div>
      </div>
    </section>
  );
}
