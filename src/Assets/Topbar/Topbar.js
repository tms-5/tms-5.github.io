import React, { useEffect, useState } from "react";
import "./Topbar.css";
import DesktopMenu from "./Components/DesktopMenu";
import MobileMenu from "./Components/MobileMenu";

export default function Topbar() {
  const [activeIndex, setActiveIndex] = useState("0");
  const topics = React.useMemo(
    () => [
      { name: "Inicio", index: "0", href: "#Inicio" },
      { name: "Curriculo", index: "1", href: "#Curriculo" },
      { name: "Sobre", index: "2", href: "#Sobre" },
      { name: "Skills", index: "3", href: "#Skills" },
    ],
    []
  );
  const [menuDesktop, setMenuDesktop] = useState(true);

  function handleResize() {
    const width = window.innerWidth;
    if (width < 920) {
      setMenuDesktop(false);
    } else {
      setMenuDesktop(true);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    if (!window.location.hash || window.location.hash === "#") {
      window.location.hash = "#Inicio";
      window.scrollTo(0, 0);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY === 0) {
        setActiveIndex("0");
        return;
      }
      const sectionIds = topics.map((t) => t.href.replace("#", ""));
      let maxPercent = 0;
      let active = "0";
      sectionIds.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const vh =
            window.innerHeight || document.documentElement.clientHeight;
          const visible = Math.max(
            0,
            Math.min(rect.bottom, vh) - Math.max(rect.top, 0)
          );
          const percent = visible / Math.min(rect.height, vh);
          if (percent > maxPercent) {
            maxPercent = percent;
            active = idx.toString();
          }
        }
      });
      setActiveIndex(active);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [topics]);

  return (
    <div
      className="bg-topbar justify-s-b p-fixed o-hidden"
      style={{ zIndex: "100" }}
    >
      {menuDesktop ? (
        <DesktopMenu
          topics={topics}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ) : (
        <MobileMenu
          topics={topics}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      )}
    </div>
  );
}
