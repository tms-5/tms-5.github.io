import { cn } from "./classNames";

const variants = {
  section:
    "rounded-3xl border border-plum/5 bg-white/80 shadow-[0_24px_70px_rgba(62,0,82,0.08)] backdrop-blur",
  panel: "rounded-3xl border border-plum/5 bg-white/80 backdrop-blur",
  item: "rounded-2xl border border-plum/10 bg-white",
  glass:
    "rounded-3xl border border-white/20 bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur",
};

const padding = {
  none: "",
  sm: "p-4",
  md: "p-6 md:p-10",
  lg: "p-7 md:p-12",
};

export default function UICard({
  as: Component = "div",
  variant = "panel",
  padding: cardPadding = "md",
  interactive = false,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        variants[variant],
        padding[cardPadding],
        interactive &&
          "transition-[background-color,border-color,box-shadow] duration-500 ease-out hover:bg-lavender-100",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
