"use client";

import AdeHamburgerMenu from "@/app/components/icons/AdeHamburgerMenu";
import AdeLogo from "@/app/components/logos/AdeLogo";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdeNavigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const onNavClick = () => {
    setIsNavOpen((val) => !val);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavOpen]);

  return (
    <div
      className={classNames([
        "mx-auto",
        "md:flex md:items-center md:justify-between",
        "w-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl",
      ])}
    >
      <div className="mx-6 md:mx-0">
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
          "md:py-8",
          "flex flex-col items-center justify-center space-y-10 md:flex-row md:space-x-6 md:space-y-0",
          "md:translate-y-0",
          !isNavOpen && "-translate-y-full",
        ])}
      >
        <Link
          href="/#about-me"
          className="font-sf-mono transition hover:text-pink"
        >
          <span className="text-pink">01. </span>
          about me
        </Link>
        <Link
          href="/#about-me"
          className="font-sf-mono transition hover:text-yellow"
        >
          <span className="text-yellow">02. </span>
          experience
        </Link>
        <Link
          href="/#about-me"
          className="font-sf-mono transition hover:text-blue"
        >
          <span className="text-blue">03. </span>
          project
        </Link>
        <Link
          href="/#about-me"
          className="font-sf-mono transition hover:text-green"
        >
          <span className="text-green">04. </span>
          contact
        </Link>
      </nav>
    </div>
  );
}
