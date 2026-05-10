import { motion, useReducedMotion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import btn from "./Button.module.css";

const MotionAnchor = motion.a;

type Variant = "primary" | "secondary" | "ghost" | "dark";

type Props = Omit<HTMLMotionProps<"a">, "className"> & {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variantClass: Record<Variant, string> = {
  primary: btn.primary,
  secondary: btn.secondary,
  ghost: btn.ghost,
  dark: btn.dark,
};

export function LinkButton({
  children,
  variant = "primary",
  className,
  ...rest
}: Props) {
  const reduce = useReducedMotion() === true;
  const merged = [btn.base, variantClass[variant], className]
    .filter(Boolean)
    .join(" ");
  return (
    <MotionAnchor
      className={merged}
      whileHover={
        reduce
          ? undefined
          : {
              y: -3,
              transition: { type: "spring", stiffness: 420, damping: 26 },
            }
      }
      whileTap={
        reduce
          ? undefined
          : { scale: 0.98, transition: { duration: 0.12 } }
      }
      {...rest}
    >
      {children}
    </MotionAnchor>
  );
}
