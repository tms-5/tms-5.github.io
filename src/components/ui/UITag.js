import { cn } from "./classNames";

const variants = {
  plum: "bg-lavender-200 text-plum",
  slate: "border border-slate-200 bg-slate-50 text-slate-700",
  dashed: "border border-dashed border-slate-400 bg-white text-slate-600 hover:border-slate-600 hover:text-slate-900",
};

export default function UITag({
  as: Component = "span",
  variant = "plum",
  className,
  children,
  type,
  ...props
}) {
  const tagType = Component === "button" ? type || "button" : undefined;

  return (
    <Component
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold transition-[background-color,color,border-color] duration-500 ease-out",
        variants[variant],
        className
      )}
      type={tagType}
      {...props}
    >
      {children}
    </Component>
  );
}
