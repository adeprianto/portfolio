import classNames from "classnames";

type TerminalContainerProps = {
  children?: React.ReactNode;
};

export default function TerminalContainer({
  children,
}: TerminalContainerProps) {
  return (
    <div className={classNames(["w-full", "rounded-lg border border-outline"])}>
      <div
        className={classNames([
          "w-full",
          "flex items-center justify-start space-x-1",
          "border-b border-outline",
          "p-2",
        ])}
      >
        <div
          className={classNames(["h-3 w-3", "rounded-full", "bg-pink"])}
        ></div>
        <div
          className={classNames(["h-3 w-3", "rounded-full", "bg-yellow"])}
        ></div>
        <div
          className={classNames(["h-3 w-3", "rounded-full", "bg-green"])}
        ></div>
      </div>
      <div className={classNames(["w-full", "p-4"])}>{children}</div>
    </div>
  );
}
