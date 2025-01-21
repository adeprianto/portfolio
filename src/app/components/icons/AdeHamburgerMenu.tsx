import classNames from "classnames";

type AdeHamburgerMenuProps = {
  isOpen?: boolean;
  onClick?: () => void;
};

export default function AdeHamburgerMenu({
  isOpen = false,
  onClick,
}: AdeHamburgerMenuProps) {
  return (
    <div
      className={classNames([
        "relative z-50 h-[48px] w-[56px] transition md:hidden",
      ])}
      onClick={onClick}
    >
      <div
        className={classNames([
          "absolute right-2 top-2 h-[6px] w-[40px] rounded bg-green transition duration-300",
          isOpen && "translate-y-4 rotate-45 transform",
        ])}
      ></div>
      <div
        className={classNames([
          "absolute right-2 top-1/2 h-[6px] w-[40px] -translate-y-1/2 rounded bg-yellow transition duration-300",
          isOpen && "-rotate-45 transform",
        ])}
      ></div>
      <div
        className={classNames([
          "absolute bottom-2 right-2 h-[6px] w-[28px] rounded bg-blue transition duration-300",
          isOpen && "opacity-0",
          !isOpen && "opacity-100",
        ])}
      ></div>
    </div>
  );
}
