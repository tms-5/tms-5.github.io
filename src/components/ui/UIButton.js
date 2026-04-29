import { cn } from "./classNames";

const variants = {
  primary:
    "bg-plum-700 text-white shadow-lg shadow-plum/20 hover:bg-plum-900",
  gradient:
    "relative overflow-hidden border border-transparent bg-gradient-to-br from-plum-700 to-orchid-600 text-white before:absolute before:inset-0 before:bg-gradient-to-br before:from-orchid-600 before:to-plum-700 before:opacity-0 before:transition-opacity before:duration-500 before:ease-out hover:before:opacity-100",
  outline:
    "border border-plum/40 text-plum hover:border-plum hover:text-lavender-900 hover:bg-plum-200",
  soft:
    "border border-plum/30 bg-lavender-100/70 text-plum hover:border-plum/70 hover:bg-plum hover:text-white",
  ghost:
    "border border-transparent bg-white/85 text-lavender-600 hover:bg-lavender/50 hover:text-plum",
};

const sizes = {
  sm: "min-h-[38px] px-4 text-sm",
  md: "min-h-11 px-6 text-sm",
  lg: "min-h-12 px-7",
};

export default function UIButton({
  as: Component = "button",
  variant = "outline",
  size = "sm",
  className,
  children,
  type,
  ...props
}) {
  const buttonType = Component === "button" ? type || "button" : undefined;

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-full font-extrabold no-underline transition-[background-color,color,border-color,box-shadow] duration-500 ease-out disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-plum focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lavender/90",
        variants[variant],
        sizes[size],
        className
      )}
      type={buttonType}
      {...props}
    >
      <span className="relative z-[1]">{children}</span>
    </Component>
  );
}
