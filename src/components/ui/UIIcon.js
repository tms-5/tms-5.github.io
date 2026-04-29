const icons = {
  chevronLeft: (
    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
  ),
  chevronRight: (
    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
  ),
  star: (
    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
  ),
  menu: (
    <>
      <path d="M160-240v-80h640v80H160Z" />
      <path d="M160-440v-80h640v80H160Z" />
      <path d="M160-640v-80h640v80H160Z" />
    </>
  ),
  close: (
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  ),
};

export default function UIIcon({
  name,
  size = 24,
  className,
  decorative = true,
  title,
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
      fill="currentColor"
      aria-hidden={decorative}
      role={decorative ? undefined : "img"}
    >
      {title ? <title>{title}</title> : null}
      {icons[name]}
    </svg>
  );
}
