import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost" | "dark";

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const variantClass: Record<Variant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
  dark: styles.dark,
};

export function Button({
  children,
  variant = "primary",
  type = "button",
  className,
  ...rest
}: Props) {
  const merged = [styles.base, variantClass[variant], className]
    .filter(Boolean)
    .join(" ");
  return (
    <button type={type} className={merged} {...rest}>
      {children}
    </button>
  );
}
