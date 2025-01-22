import { RefObject, useLayoutEffect, useRef } from "react";

type ScrollPosition = {
  x: number;
  y: number;
};

const isBrowser = typeof window !== "undefined";

function getScrollPosition({
  element,
  useWindow,
}: {
  element?: RefObject<HTMLElement>;
  useWindow?: boolean;
}): ScrollPosition {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

function useScrollPosition(
  effect: ({
    prevPos,
    currPos,
  }: {
    prevPos: ScrollPosition;
    currPos: ScrollPosition;
  }) => void,
  deps: any[] = [],
  element?: RefObject<HTMLElement>,
  useWindow: boolean = true,
  wait?: number,
) {
  const position = useRef(getScrollPosition({ useWindow }));

  const throttleTimeout = useRef<NodeJS.Timeout>(null);

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout.current = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, deps);
}

export default useScrollPosition;
