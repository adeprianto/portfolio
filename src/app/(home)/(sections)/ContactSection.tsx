import AnimationContainer from "@src/app/components/container/AnimationContainer";
import classNames from "classnames";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className={classNames([
        "my-40 xl:my-48 2xl:my-72",
        "w-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl",
        "mx-auto",
      ])}
    >
      <div className="mx-6 text-center">
        <AnimationContainer className="mx-auto">
          <span className="block font-sf-mono text-title-medium font-bold text-green">
            04. Contact Me
          </span>
        </AnimationContainer>
        <AnimationContainer className="mx-auto">
          <h1 className="font-display-small mt-8 font-bold">Get In Touch</h1>
        </AnimationContainer>
        <AnimationContainer className="mx-auto">
          <p className="mx-auto mt-8 max-w-2xl font-sf-mono">
            If you want to reach me out, wether it&#39;s to offer new
            opportunities, or to connect with me, or just want to say hi, my
            inbox is always open, I&#39;ll do my best to get back to you!
          </p>
        </AnimationContainer>
        <AnimationContainer className="mx-auto">
          <Link
            href="mailto:adeprianto21@gmail.com"
            className={classNames([
              "mt-12",
              "inline-block origin-bottom-right rounded border border-green px-8 py-6 font-sf-mono text-green transition duration-300",
              "hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_#84E296]",
            ])}
          >
            <span>Say Hello</span>
          </Link>
        </AnimationContainer>
      </div>
    </section>
  );
}
