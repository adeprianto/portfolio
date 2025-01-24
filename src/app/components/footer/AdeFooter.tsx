import classNames from "classnames";

import IconGithub from "@asset/icons/ic-github.svg";
import IconLinkedin from "@asset/icons/ic-linkedin.svg";
import IconWhatsapp from "@asset/icons/ic-whatsapp.svg";

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
            <button
              className={classNames([
                "transition duration-300",
                "hover:-translate-y-2 hover:text-green active:-translate-y-2 active:text-green",
              ])}
            >
              <IconGithub />
            </button>
            <button
              className={classNames([
                "transition duration-300",
                "hover:-translate-y-2 hover:text-green active:-translate-y-2 active:text-green",
              ])}
            >
              <IconLinkedin />
            </button>
            <button
              className={classNames([
                "transition duration-300",
                "hover:-translate-y-2 hover:text-green active:-translate-y-2 active:text-green",
              ])}
            >
              <IconWhatsapp />
            </button>
            <div className="hidden h-[15vh] w-0.5 rounded bg-white lg:block"></div>
          </div>
          <div className="hidden lg:absolute lg:bottom-0 lg:right-6 lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-8">
            <button
              className={classNames([
                "font-body-small font-sf-mono",
                "transition duration-300",
                "hover:-translate-y-2 hover:text-green active:-translate-y-2 active:text-green",
              ])}
              style={{ writingMode: "vertical-rl" }}
            >
              adeprianto21@gmail.com
            </button>
            <div className="hidden h-[15vh] w-0.5 rounded bg-white lg:block"></div>
          </div>
        </div>
        <span className="font-body-small col-span-4 mx-auto inline-block py-8 font-sf-mono font-light lg:col-span-8 xl:col-span-12">
          Build by Ade Prianto
        </span>
      </div>
    </footer>
  );
}
