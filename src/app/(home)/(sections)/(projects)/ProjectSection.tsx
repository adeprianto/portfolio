"use client";

import ItemProject from "@src/app/(home)/(sections)/(projects)/ItemProject";
import classNames from "classnames";
import dynamic from "next/dynamic";

const AnimationContainer = dynamic(
  () => import("@src/app/components/container/AnimationContainer"),
  { ssr: false },
);

export default function ProjectSection() {
  return (
    <section
      id="project"
      className={classNames([
        "mt-40 xl:mt-56 2xl:mt-72",
        "w-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl",
        "mx-auto",
      ])}
    >
      <div className="mx-6 grid grid-cols-4 gap-6 lg:grid-cols-8 xl:grid-cols-12">
        <div className="col-span-4 flex items-center justify-center gap-4 lg:col-span-4 lg:col-start-2 xl:col-span-5 xl:col-start-3">
          <AnimationContainer from="left">
            <span className="font-sf-mono text-title-large font-bold text-blue">
              03. Project
            </span>
          </AnimationContainer>
          <AnimationContainer className="grow" from="left">
            <div className="h-0.5 bg-white"></div>
          </AnimationContainer>
        </div>
        <div className="col-span-4 mt-6 space-y-16 md:space-y-24 lg:col-span-6 lg:col-start-2 xl:col-span-8 xl:col-start-3">
          <AnimationContainer from="left" showFromBottomWhenViewWidth={768}>
            <ItemProject
              imgSrc="/assets/images/nagari-1.png"
              title="Nagari"
              description="An android app that connects agricultural business with buyers directly. Buyers can hold an auction for agricultural to carry out seed cultivation needed by buyers and later agricultural can negotiate to carry out the seed cultivation process."
              techStack={["Flutter", "Android", "PHP", "Laravel"]}
            />
          </AnimationContainer>
          <AnimationContainer from="right" showFromBottomWhenViewWidth={768}>
            <ItemProject
              reverse={true}
              imgSrc="/assets/images/temanjabar-web-1.png"
              title="Temanjabar (Web)"
              description="Temanjabar is the official application of Dinas Bina Marga dan Penataan Ruang Provinsi Jawa Barat designed to bring information about highways digitally. This application was developed to assist the government in managing and monitoring various development to maintenance activities on provincial roads and bridges."
              techStack={["TypeScript", "React", "Next.JS", "PHP", "Laravel"]}
            />
          </AnimationContainer>
          <AnimationContainer from="left" showFromBottomWhenViewWidth={768}>
            <ItemProject
              imgSrc="/assets/images/temanjabar-mobile-1.png"
              title="Temanjabar (Mobile)"
              description="In today's world, where most user activities demand high mobility, the Temanjabar application being limited to a web version has proven to be less practical and somewhat rigid. The mobile version of the Temanjabar app addresses this issue by offering a more convenient and interactive user experience. It also enables the public to submit complaint reports more quickly and efficiently."
              techStack={["Flutter", "Android", "PHP", "Laravel"]}
            />
          </AnimationContainer>
        </div>
      </div>
    </section>
  );
}
