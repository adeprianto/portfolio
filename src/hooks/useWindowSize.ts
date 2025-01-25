import { useLayoutEffect, useRef } from "react";

type WindowSize = {
  width: number;
  height: number;
};

const isBrowser = typeof window !== "undefined";

const getWindowSize = (): WindowSize => {
  if (!isBrowser) return { width: 0, height: 0 } as WindowSize;

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

function useWindowSize(
  effect: (size: WindowSize) => void,
  deps: any[] = [],
  wait?: number,
) {
  const size = useRef(getWindowSize());

  const throttleTimeout = useRef<NodeJS.Timeout>(null);

  const callBack = () => {
    const currSize = getWindowSize();
    effect(currSize);
    size.current = currSize;
    throttleTimeout.current = null;
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      if (wait) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, deps);
}

export default useWindowSize;
