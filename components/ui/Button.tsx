import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/**
 * The pill CTA used throughout the journey. Renders a `Link` when `href` is
 * provided, otherwise a `button`. Variants/colours are token-based so a re-theme
 * flows through automatically.
 */
type Variant = "primary" | "outline" | "neutral";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center rounded-full text-sm font-bold uppercase tracking-[0.2em] transition duration-200";

const sizes: Record<Size, string> = {
  md: "px-7 py-4",
  lg: "px-8 py-4",
};

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white shadow-sm shadow-primary/20 hover:bg-ink",
  outline: "border border-primary text-primary hover:bg-primary hover:text-white",
  neutral: "border border-line text-ink hover:border-primary",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & (
  | ({ href: string } & Omit<ComponentProps<typeof Link>, "href" | "className">)
  | ({ href?: undefined } & Omit<ComponentProps<"button">, "className">)
);

export default function Button({
  variant = "primary",
  size = "lg",
  className = "",
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as Omit<ComponentProps<typeof Link>, "href" | "className">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
