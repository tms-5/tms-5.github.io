import { cn } from "./classNames";

const variants = {
  primary: "border-transparent bg-plum text-white hover:bg-orchid",
  outline:
    "border-plum/25 bg-white text-plum hover:bg-plum hover:text-white disabled:hover:bg-white disabled:hover:text-plum",
  soft:
    "border-plum/30 bg-white/80 text-plum hover:border-plum/70 hover:bg-plum hover:text-white",
};

const sizes = {
  sm: "h-[38px] w-[38px]",
  md: "h-11 w-11",
  lg: "h-12 w-12",
};

export default function UIIconButton({
  className,
  variant = "outline",
  size = "md",
  label,
  children,
  type = "button",
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-grid place-items-center rounded-full border transition-[background-color,color,border-color,box-shadow] duration-500 ease-out disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lavender/90",
        variants[variant],
        sizes[size],
        className
      )}
      type={type}
      aria-label={label}
      {...props}
    >
      {children}
    </button>
  );
}
