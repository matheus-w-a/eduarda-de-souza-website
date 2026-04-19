import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-100 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-terracotta-500 text-sand-50 shadow-soft hover:bg-terracotta-600 hover:-translate-y-0.5 hover:shadow-card",
  outline:
    "border border-terracotta-500/50 text-terracotta-500 hover:border-terracotta-500 hover:bg-terracotta-500 hover:text-sand-50",
  ghost:
    "text-terracotta-500 hover:bg-terracotta-500/10",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-[0.95rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    as?: "button";
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.as === "a") {
    const { as: _as, variant: _v, size: _s, className: _c, ...anchorProps } = props;
    void _as;
    void _v;
    void _s;
    void _c;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _as, variant: _v, size: _s, className: _c, ...buttonProps } = props;
  void _as;
  void _v;
  void _s;
  void _c;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
