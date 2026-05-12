import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewportAmount?: number | "some";
  y?: number;
};

export function FadeInUp({
  children,
  className,
  delay = 0,
  viewportAmount = 0.22,
  y = 24,
}: Props) {
  const reduce = useReducedMotion() === true;
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px", amount: viewportAmount }}
      transition={{
        duration: reduce ? 0 : 0.55,
        delay: reduce ? 0 : delay,
        ease: easeOutExpo,
      }}
    >
      {children}
    </motion.div>
  );
}
