import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
};

export function Container({
  size = "default",
  className = "",
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 lg:px-12 ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
