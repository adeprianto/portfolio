import classNames from "classnames";

import IconGithub from "@asset/icons/ic-github.svg";
import IconLinkedin from "@asset/icons/ic-linkedin.svg";
import IconWhatsapp from "@asset/icons/ic-whatsapp.svg";
import AnimationContainer from "@src/app/components/container/AnimationContainer";
import Link from "next/link";

export default function AdeFooter() {
  return (
    <footer
      className={classNames([
        "text-center",
        "relative w-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl",
        "mx-auto",
      ])}
    >
      <div className="grid grid-cols-4 gap-6 lg:grid-cols-8 xl:grid-cols-12">
        <div
          className={classNames([
            "static lg:fixed lg:bottom-0",
            "mx-auto",
            "w-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl",
          ])}
        >
          <div className="flex items-center justify-center gap-8 lg:absolute lg:bottom-0 lg:left-6 lg:flex-col">
            <AnimationContainer from="left" showFromBottomWhenViewWidth={992}>
              <Link
                href="https://github.com/adeprianto"
                target="_blank"
                className={classNames([
                  "transition duration-300",
                  "hover:-translate-y-2 hover:text-green active:-translate-y-2 active:text-green",
                ])}
              >
                <IconGithub />
              </Link>
            </AnimationContainer>
            <AnimationContainer from="left" showFromBottomWhenViewWidth={992}>
              <Link
                href="https://www.linkedin.com/in/adeprianto/"
                target="_blank"
                className={classNames([
                  "transition duration-300",
                  "hover:-translate-y-2 hover:text-green active:-translate-y-2 active:text-green",
                ])}
              >
                <IconLinkedin />
              </Link>
            </AnimationContainer>
            <AnimationContainer from="left" showFromBottomWhenViewWidth={992}>
              <Link
                href="https://api.whatsapp.com/send/?phone=087723717372&text=Hello+Ade%21%0A%0AI+found+you+on+your+website%2C+...&type=phone_number&app_absent=0"
                target="_blank"
                className={classNames([
                  "transition duration-300",
                  "hover:-translate-y-2 hover:text-green active:-translate-y-2 active:text-green",
                ])}
              >
                <IconWhatsapp />
              </Link>
            </AnimationContainer>
            <AnimationContainer className="hidden lg:block">
              <div className="h-[15vh] w-0.5 rounded bg-white"></div>
            </AnimationContainer>
          </div>
          <div className="hidden lg:absolute lg:bottom-0 lg:right-6 lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-8">
            <AnimationContainer from="right">
              <Link
                href="mailto:adeprianto21@gmail.com"
                target="_blank"
                className={classNames([
                  "font-body-small font-sf-mono",
                  "transition duration-300",
                  "hover:-translate-y-2 hover:text-green active:-translate-y-2 active:text-green",
                ])}
                style={{ writingMode: "vertical-rl" }}
              >
                adeprianto21@gmail.com
              </Link>
            </AnimationContainer>
            <AnimationContainer>
              <div className="hidden h-[15vh] w-0.5 rounded bg-white lg:block"></div>
            </AnimationContainer>
          </div>
        </div>
        <AnimationContainer
          width="100%"
          className={classNames([
            "col-span-4",
            "lg:col-span-8",
            "xl:col-span-12",
          ])}
        >
          <span className="font-body-small mx-auto inline-block py-8 font-sf-mono font-light">
            Build by Ade Prianto
          </span>
        </AnimationContainer>
      </div>
    </footer>
  );
}
