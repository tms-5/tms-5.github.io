import React, { useEffect, useMemo, useState } from "react";
import ChangeLanguage from "./Components/ChangeLanguage";
import logo from "../../Assets/Img/logo-web-png.png";
import { useTranslation } from "react-i18next";
import { UIButton, UIIconButton } from "../../components/ui";

export default function Topbar() {
  const { t } = useTranslation();
  const [activeHref, setActiveHref] = useState("#Inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const topics = useMemo(
    () => [
      { name: "Inicio", href: "#Inicio" },
      { name: "Curriculo", href: "#Curriculo" },
      { name: "Sobre", href: "#Sobre" },
      { name: "Portfolio", href: "#Portfolio" },
      { name: "Skills", href: "#Skills" },
      { name: "Contato", href: "#Contato" },
    ],
    []
  );

  useEffect(() => {
    if (!window.location.hash || window.location.hash === "#") {
      window.location.hash = "#Inicio";
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    function updateActiveLink() {
      let nextActive = "#Inicio";
      const offsetTop = 140;

      topics.forEach((topic) => {
        const section = document.querySelector(topic.href);
        if (!section) return;

        if (section.getBoundingClientRect().top <= offsetTop) {
          nextActive = topic.href;
        }
      });

      setActiveHref(nextActive);
    }

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, [topics]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] overflow-visible backdrop-blur-[18px]">
      <nav
        className="container grid min-h-[76px] grid-cols-[auto_1fr_auto] items-center gap-6 max-[920px]:grid-cols-[auto_auto] max-[920px]:justify-between"
        aria-label={t("nav.aria")}
      >
        <a
          className="inline-flex w-fit items-center rounded-full outline-none focus-visible:ring-4 focus-visible:ring-lavender/90"
          href="#Inicio"
          aria-label={t("nav.brand_aria")}
          onClick={closeMenu}
        >
          <img
            className="h-auto w-[116px] object-contain px-3.5 py-2.5 opacity-50 [filter:invert(52%)_sepia(51%)_saturate(240%)_hue-rotate(223deg)] max-[420px]:w-[94px] max-[420px]:px-3 max-[420px]:py-[9px]"
            src={logo}
            alt="Logo Thamires Morais"
            width="116"
            height="36"
          />
        </a>

        <div className="hidden items-center gap-2.5 max-[920px]:flex">
          <ChangeLanguage />

          <UIIconButton
            className="relative cursor-pointer border-0"
            variant="primary"
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            label={isMenuOpen ? t("nav.close_menu") : t("nav.open_menu")}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span
              className={`absolute right-[13px] h-0.5 rounded-full bg-white transition duration-200 ${
                isMenuOpen ? "w-[18px] rotate-45" : "w-[11px] -translate-y-[5px]"
              }`}
            ></span>
            <span
              className={`absolute right-[13px] h-0.5 w-[18px] rounded-full bg-white transition duration-200 ${
                isMenuOpen ? "opacity-0" : "translate-y-0"
              }`}
            ></span>
            <span
              className={`absolute right-[13px] h-0.5 rounded-full bg-white transition duration-200 ${
                isMenuOpen ? "w-[18px] -rotate-45" : "w-[11px] translate-y-[5px]"
              }`}
            ></span>
          </UIIconButton>
        </div>

        <div
          id="main-menu"
          className={`justify-self-center rounded-full border border-plum/10 bg-white/85 p-1.5 shadow-[0_18px_55px_rgba(62,0,82,0.12)] max-[920px]:fixed max-[920px]:left-4 max-[920px]:right-4 max-[920px]:top-[76px] max-[920px]:z-[120] max-[920px]:grid max-[920px]:justify-self-stretch max-[920px]:gap-1 max-[920px]:rounded-2xl max-[920px]:p-3 max-[920px]:transition max-[920px]:duration-200 min-[921px]:flex min-[921px]:items-center min-[921px]:gap-1.5 ${
            isMenuOpen
              ? "max-[920px]:pointer-events-auto  max-[920px]:bg-white max-[920px]:translate-y-0 max-[920px]:scale-100 max-[920px]:opacity-100"
              : "max-[920px]:pointer-events-none max-[920px]:-translate-y-3 max-[920px]:scale-[0.98] max-[920px]:opacity-0"
          }`}
        >
          {topics.map((topic) => (
            <a
              key={topic.href}
              className={`relative inline-flex min-h-[38px] items-center rounded-full px-[15px] text-[0.92rem] font-bold no-underline transition-[background-color,color] duration-500 ease-out hover:bg-lavender/50 hover:text-plum focus-visible:ring-4 focus-visible:ring-lavender/90 max-[920px]:min-h-[42px] max-[920px]:justify-center max-[920px]:rounded-[10px] ${
                activeHref === topic.href
                  ? "bg-lavender text-lavender-900"
                  : "text-lavender-600"
              }`}
              href={topic.href}
              aria-current={activeHref === topic.href ? "page" : undefined}
              onClick={closeMenu}
            >
              {t(topic.name)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5 max-[920px]:hidden">
          <ChangeLanguage />
          <UIButton
            as="a"
            variant="soft"
            href="#Contato"
          >
            {t("Contato")}
          </UIButton>
        </div>
      </nav>
    </header>
  );
}
