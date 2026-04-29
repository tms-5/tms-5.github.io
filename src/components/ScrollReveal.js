import { useRef, useEffect, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  threshold = 0.3,
  rootMargin = "0px 0px -10% 0px",
  id = "",
}) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      id={id}
    >
      {children}
    </div>
  );
}
