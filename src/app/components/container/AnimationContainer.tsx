"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type AnimationContainerProps = {
  children: React.ReactNode;
  from?: "left" | "right" | "top" | "bottom";
  width?: "fit-content" | "100%";
  className?: string;
  showFromBottomWhenViewWidth?: number;
  disableOverflow?: boolean;
};

export default function AnimationContainer({
  children,
  from = "bottom",
  width = "fit-content",
  className,
  showFromBottomWhenViewWidth,
}: AnimationContainerProps) {
  const ref = useRef({} as HTMLDivElement);
  const animationControl = useAnimation();
  const isInView = useInView(ref, { once: true });

  const [disableOverflow, setDisableOverflow] = useState(false);

  const position = useMemo(() => {
    let y: number;
    let x: number;

    if (
      showFromBottomWhenViewWidth != null &&
      window !== undefined &&
      window.innerWidth < showFromBottomWhenViewWidth
    ) {
      x = 0;
      y = 20;
    } else {
      switch (from) {
        case "left":
          x = -20;
          y = 0;
          break;
        case "right":
          x = 20;
          y = 0;
          break;
        case "top":
          x = 0;
          y = -20;
          break;
        case "bottom":
          x = 0;
          y = 20;
          break;
        default:
          x = 0;
          y = 20;
          break;
      }
    }

    return { x, y };
  }, [showFromBottomWhenViewWidth, from]);

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        width,
        overflow: disableOverflow ? "visible" : "hidden",
        position: "relative",
      }}
      className={className}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: position.y, x: position.x },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={animationControl}
        transition={{ duration: 0.5, delay: 0.5 }}
        onAnimationComplete={() => {
          setDisableOverflow(true);
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
