"use client";

import TerminalContainer from "@src/app/components/container/TerminalContainer";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import TypeIt from "typeit";

export default function HomeSection() {
  const typeItInitialized = useRef(false);
  const typeIt = useRef<TypeIt>(null);

  useEffect(() => {
    if (!typeItInitialized.current) {
      typeIt.current = new TypeIt("#techstack-terminal", {
        speed: 100,
        loop: true,
        loopDelay: 5000,
      })
        .type("1", {
          instant: true,
          delay: 500,
        })
        .type("&nbsp;&nbsp;&nbsp;&#60;techstack&nbsp;&#47;&#62;<br/>")
        .type("2", {
          instant: true,
          delay: 500,
        })
        .type(
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-yellow'>&#60;JavaScript&nbsp;&#47;&#62;</span><br/>",
        )
        .type("3", {
          instant: true,
          delay: 500,
        })
        .type(
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-blue'>&#60;React&nbsp;&#47;&#62;</span><br/>",
        )
        .type("4", {
          instant: true,
          delay: 500,
        })
        .type(
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-green'>&#60;Node.JS&nbsp;&#47;&#62;</span><br/>",
        )
        .type("5", {
          instant: true,
          delay: 500,
        })
        .type(
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-yellow'>&#60;PHP&nbsp;&#47;&#62;</span><br/>",
        )
        .type("6", {
          instant: true,
          delay: 500,
        })
        .type(
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-pink'>&#60;Laravel&nbsp;&#47;&#62;</span><br/>",
        )
        .type("7", {
          instant: true,
          delay: 500,
        })
        .type(
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-green'>&#60;Android&nbsp;&#47;&#62;</span><br/>",
        )
        .type("8", {
          instant: true,
          delay: 500,
        })
        .type(
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-blue'>&#60;Flutter&nbsp;&#47;&#62;</span><br/>",
        )
        .type("9", {
          instant: true,
          delay: 500,
        })
        .type(
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-yellow'>&#60;Python&nbsp;&#47;&#62;</span><br/>",
        )
        .type("10", {
          instant: true,
          delay: 500,
        })
        .type("&nbsp;&nbsp;&#60;and more...&nbsp;&#47;&#62;", {
          delay: 5000,
        })
        .go();

      typeItInitialized.current = true;
    }
  }, []);

  return (
    <section
      className={classNames([
        "mt-40 lg:mt-0",
        "flex w-screen items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:min-h-screen lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl",
        "mx-auto",
      ])}
    >
      <div className="mx-6 grid grid-cols-4 gap-6 lg:grid-cols-8 xl:grid-cols-12">
        <div className="col-span-4 lg:col-span-3 lg:col-start-2 xl:col-span-5 xl:col-start-2">
          <span className="text-yellow">Hi, my name is</span>
          <h1 className="font-display-medium mt-8 font-bold">
            Ade Prianto
            <span className="text-pink">.</span>
          </h1>
          <h1 className="font-display-medium font-bold">
            I creating things for the <span className="text-blue">web</span> and
            <span className="text-green"> mobile</span>.
          </h1>
          <p className="mt-8">
            I am a versatile software engineer with a strong focus on web and
            mobile development. My journey in tech has been driven by a love for
            building efficient, user-friendly applications. Beside development,
            I am also deeply interested in the field of data science, spending
            my time learning about machine learning and data analytics.
          </p>
        </div>
        <div className="col-span-4 mt-8 lg:col-span-3 xl:col-span-4 xl:col-start-8">
          <TerminalContainer>
            <div className="h-80">
              <span
                id="techstack-terminal"
                className="font-sf-mono leading-8"
              />
            </div>
          </TerminalContainer>
        </div>
      </div>
    </section>
  );
}
