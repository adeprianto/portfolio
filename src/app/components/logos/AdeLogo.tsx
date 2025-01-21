import classNames from "classnames";

type AdeLogoProps = {
  className?: string;
};

export default function AdeLogo({ className }: AdeLogoProps) {
  return (
    <span className={classNames(["font-headline-small font-bold", className])}>
      ade
      <span className="text-pink">.</span>
      prianto
    </span>
  );
}
