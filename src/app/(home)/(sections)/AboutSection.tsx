import classNames from "classnames";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className={classNames([
        "mt-40 xl:mt-60",
        "w-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl",
        "mx-auto",
      ])}
    >
      <div className="mx-6 grid grid-cols-4 gap-6 lg:grid-cols-8 xl:grid-cols-12">
        {/*<div className="h-16 bg-blue"></div>*/}
        {/*<div className="h-16 bg-blue"></div>*/}
        {/*<div className="h-16 bg-blue"></div>*/}
        {/*<div className="h-16 bg-blue"></div>*/}
        {/*<div className="h-16 bg-blue"></div>*/}
        {/*<div className="h-16 bg-blue"></div>*/}
        {/*<div className="h-16 bg-blue"></div>*/}
        {/*<div className="h-16 bg-blue"></div>*/}
        {/*<div className="h-16 bg-blue"></div>*/}
        {/*<div className="h-16 bg-blue"></div>*/}
        {/*<div className="h-16 bg-blue"></div>*/}
        {/*<div className="h-16 bg-blue"></div>*/}
        <div className="col-span-4 flex items-center justify-center gap-4 lg:col-span-4 lg:col-start-2 xl:col-span-5 xl:col-start-3">
          <span className="font-sf-mono text-title-large font-bold text-pink">
            01. About Me
          </span>
          <div className="h-0.5 grow bg-white"></div>
        </div>
        <div className="col-span-4 mt-6 space-y-4 text-justify lg:col-span-4 lg:col-start-2 xl:col-span-5 xl:col-start-3">
          <p>
            I am a passionate software engineer dedicated to creating
            applications that not only deliver robust functionality but also
            prioritize performance, usability, design, and aesthetics to provide
            an exceptional user experience.
          </p>
          <p>
            Currently, I work as a Full Stack Engineer at the West Java
            Provincial Highways and Spatial Planning Agency, where I focus on
            developing both web and Android mobile applications. I am involved
            in the entire development lifecycle, from design and implementation
            to development and monitoring, ensuring that the applications adhere
            to standards and best practices.
          </p>
          <p>
            I have extensive experience in application development, spanning
            both web and mobile platforms, with projects ranging from start-ups
            to government initiatives. Additionally, I have a strong interest in
            data science and its potential to transform raw data into actionable
            insights. While I have not yet applied data science in a
            professional capacity, I am eager to incorporate this knowledge into
            future projects to create innovative solutions that benefit the
            community.
          </p>
          <p>
            In my free time, I enjoy reading books, spending time with friends,
            staying updated on the latest technologies and frameworks, or simply
            playing music.
          </p>
        </div>
        <div className="relative col-span-2 col-start-2 mt-6 aspect-square lg:col-span-2 lg:ml-16 xl:col-span-3">
          <Image
            src="/assets/images/emoji.webp"
            alt="Emoji"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
