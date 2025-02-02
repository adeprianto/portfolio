"use client";

import AdeHamburgerMenu from "@src/app/components/icons/AdeHamburgerMenu";
import AdeLogo from "@src/app/components/logos/AdeLogo";
import useScrollPosition from "@src/hooks/useScrollPosition";
import classNames from "classnames";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const AdeNavigation: React.FunctionComponent = () => {
  const navRef = useRef({} as HTMLDivElement);
  const animationControl = useAnimation();
  const isInView = useInView(navRef, { once: true });

  const [isOnTop, setIsOnTop] = useState(true);
  const [isNavShow, setIsNavShow] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const onNavClick = () => {
    setIsNavOpen((val) => !val);
  };

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavOpen]);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < prevPos.y || currPos.y < 20;
      if (isShow !== isNavShow) setIsNavShow(isShow);
    },
    [isNavShow],
  );

  useScrollPosition(
    ({ currPos }) => {
      const isTop = currPos.y === 0;
      if (isTop !== isOnTop) setIsOnTop(isTop);
    },
    [isOnTop],
  );

  return (
    <div
      ref={navRef}
      className={classNames([
        "w-full",
        "md:overflow-hidden",
        "left-1/2 -translate-x-1/2",
        "fixed top-0 z-50 transition",
        !isOnTop && "backdrop-blur-lg",
        !isOnTop && "shadow-md shadow-navigation",
        isNavShow ? "translate-y-0" : "-translate-y-full",
      ])}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        initial="hidden"
        animate={animationControl}
        className={classNames([
          "mx-auto",
          "md:flex md:items-center md:justify-between",
          "w-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl",
        ])}
      >
        <div className="mx-6">
          <div className="flex items-center justify-between py-4">
            <AdeLogo className="z-50" />
            <AdeHamburgerMenu isOpen={isNavOpen} onClick={onNavClick} />
          </div>
        </div>
        <nav
          className={classNames([
            "bg-navigation transition duration-300 md:bg-transparent",
            "fixed bottom-0 left-0 right-0 top-0 z-10 md:static",
            "h-screen w-screen md:h-auto md:w-auto",
            "md:mx-6 md:py-8",
            "flex flex-col items-center justify-center space-y-10 md:flex-row md:space-x-6 md:space-y-0",
            "md:translate-y-0",
            !isNavOpen && "-translate-y-full",
          ])}
        >
          <Link
            href="/#about-me"
            className="font-sf-mono transition hover:text-pink"
            onClick={(e) => {
              e.preventDefault();
              setIsNavOpen(false);
              const element = document.getElementById("about-me");
              if (element != null && typeof window !== undefined) {
                window.scrollTo({
                  top: element.offsetTop - 120,
                  behavior: "smooth",
                });
              }
            }}
          >
            <span className="text-pink">01. </span>
            about me
          </Link>
          <Link
            href="/#experience"
            className="font-sf-mono transition hover:text-yellow"
            onClick={(e) => {
              e.preventDefault();
              setIsNavOpen(false);
              const element = document.getElementById("experience");
              if (element != null && typeof window !== undefined) {
                window.scrollTo({
                  top: element.offsetTop - 120,
                  behavior: "smooth",
                });
              }
            }}
          >
            <span className="text-yellow">02. </span>
            experience
          </Link>
          <Link
            href="/#project"
            className="font-sf-mono transition hover:text-blue"
            onClick={(e) => {
              e.preventDefault();
              setIsNavOpen(false);
              const element = document.getElementById("project");
              if (element != null && typeof window !== undefined) {
                window.scrollTo({
                  top: element.offsetTop - 120,
                  behavior: "smooth",
                });
              }
            }}
          >
            <span className="text-blue">03. </span>
            project
          </Link>
          <Link
            href="/#contact"
            className="font-sf-mono transition hover:text-green"
            onClick={(e) => {
              e.preventDefault();
              setIsNavOpen(false);
              const element = document.getElementById("contact");
              if (element != null && typeof window !== undefined) {
                window.scrollTo({
                  top: element.offsetTop - 120,
                  behavior: "smooth",
                });
              }
            }}
          >
            <span className="text-green">04. </span>
            contact
          </Link>
        </nav>
      </motion.div>
    </div>
  );
};

export default AdeNavigation;
