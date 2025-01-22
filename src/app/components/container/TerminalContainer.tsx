import classNames from "classnames";

type TerminalContainerProps = {
  children?: React.ReactNode;
};

export default function TerminalContainer({
  children,
}: TerminalContainerProps) {
  return (
    <div className={classNames(["w-full", "border-outline rounded-lg border"])}>
      <div
        className={classNames([
          "w-full",
          "flex items-center justify-end space-x-1",
          "border-outline border-b",
          "p-2",
        ])}
      >
        <div
          className={classNames(["h-3 w-3", "rounded-full", "bg-green"])}
        ></div>
        <div
          className={classNames(["h-3 w-3", "rounded-full", "bg-blue"])}
        ></div>
        <div
          className={classNames(["h-3 w-3", "rounded-full", "bg-pink"])}
        ></div>
      </div>
      <div className={classNames(["w-full", "p-4"])}>{children}</div>
    </div>
  );
}
