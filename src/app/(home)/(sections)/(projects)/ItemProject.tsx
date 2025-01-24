import classNames from "classnames";

type ItemProjectProps = {
  reverse?: boolean;
  imgSrc?: string;
  title?: string;
  description?: string;
  techStack?: string[];
};

export default function ItemProject({
  reverse = false,
  imgSrc,
  title,
  description,
  techStack,
}: ItemProjectProps) {
  return (
    <div className="gap-8 overflow-hidden rounded-lg md:grid md:grid-cols-5">
      <div
        className={classNames([
          "relative md:col-span-2 md:overflow-hidden md:rounded-lg",
          reverse ? "md:order-last" : "md:order-first",
        ])}
      >
        <img
          src={imgSrc}
          alt="Nagari"
          className="size-full object-cover object-left"
        />
      </div>
      <div
        className={classNames([
          "bg-navigation p-4 md:col-span-3 md:bg-transparent md:p-0",
          reverse ? "md:order-first" : "md:order-last",
        ])}
      >
        <span className="font-sf-mono text-green">Highlighted Project</span>
        <h5 className="font-headline-small mt-1.5 font-bold">{title}</h5>
        <div className="mt-2 md:rounded-lg md:border md:border-white md:bg-navigation md:p-4">
          {description}
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-green">
          {techStack?.map((tech, idx) => <span key={idx}>{tech}</span>)}
        </div>
      </div>
    </div>
  );
}
