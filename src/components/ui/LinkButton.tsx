import type { AnchorHTMLAttributes, ReactNode } from "react";
import btn from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost" | "dark";

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className">;

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
  const merged = [btn.base, variantClass[variant], className]
    .filter(Boolean)
    .join(" ");
  return (
    <a className={merged} {...rest}>
      {children}
    </a>
  );
}
