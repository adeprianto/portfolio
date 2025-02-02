"use client";

import ContentDbmprJob from "@src/app/(home)/(sections)/(experience)/(content)/ContentDbmprJob";
import ContentFiveCornerJob from "@src/app/(home)/(sections)/(experience)/(content)/ContentFiveCornerJob";
import ContentIndihealthJob from "@src/app/(home)/(sections)/(experience)/(content)/ContentIndihealthJob";
import ContentSccicJob from "@src/app/(home)/(sections)/(experience)/(content)/ContentSccicJob";
import ExperienceNav from "@src/app/(home)/(sections)/(experience)/(navigation)/ExperienceNav";
import AnimationContainer from "@src/app/components/container/AnimationContainer";
import { JobExperience } from "@src/types/JobExperience";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ExperienceSection() {
  const [selectedJobExperience, setSelectedJobExperience] = useState(
    JobExperience.FCT,
  );

  const _showJobExperience = (jobExperience: JobExperience) => {
    switch (jobExperience) {
      case JobExperience.FCT:
        return (
          <motion.div
            key="fct"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <ContentFiveCornerJob />
          </motion.div>
        );
      case JobExperience.DBMPR:
        return (
          <motion.div
            key="dbmpr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <ContentDbmprJob />
          </motion.div>
        );
      case JobExperience.SCCIC:
        return (
          <motion.div
            key="sccic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <ContentSccicJob />
          </motion.div>
        );
      case JobExperience.INDIHEALTH:
        return (
          <motion.div
            key="indihealth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <ContentIndihealthJob />
          </motion.div>
        );
    }
  };

  return (
    <section
      id="experience"
      className={classNames([
        "mt-40 xl:mt-56 2xl:mt-72",
        "w-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl",
        "mx-auto",
      ])}
    >
      <div className="grid grid-cols-4 gap-6 lg:grid-cols-8 xl:grid-cols-12">
        <div className="col-span-4 mx-6 flex items-center justify-center gap-4 lg:col-span-4 lg:col-start-2 xl:col-span-5 xl:col-start-3">
          <AnimationContainer from="left">
            <span className="font-sf-mono text-title-large font-bold text-yellow">
              02. Experience
            </span>
          </AnimationContainer>
          <AnimationContainer className="grow" from="left">
            <div className="h-0.5 bg-white"></div>
          </AnimationContainer>
        </div>
        <ExperienceNav
          selectedJobExperience={selectedJobExperience}
          setSelectedJobExperience={setSelectedJobExperience}
        />
        <div className="col-span-4 mx-6 mt-6 space-y-2 lg:col-span-4 xl:col-span-5">
          <AnimationContainer from="right">
            {_showJobExperience(selectedJobExperience)}
          </AnimationContainer>
        </div>
      </div>
    </section>
  );
}
