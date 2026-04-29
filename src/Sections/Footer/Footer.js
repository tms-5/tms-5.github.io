import React from "react";
import logo from "../../Assets/Img/logo-web-png.png";
import ScrollReveal from "../../components/ScrollReveal";
import { useTranslation, Trans } from "react-i18next";
import { UIButton } from "../../components/ui";

export default function Footer() {
  const { t } = useTranslation();

  const topics = React.useMemo(
    () => [
      { name: "Inicio", index: "0", href: "#Inicio" },
      { name: "Curriculo", index: "1", href: "#Curriculo" },
      { name: "Sobre", index: "2", href: "#Sobre" },
      { name: "Skills", index: "3", href: "#Skills" },
    ],
    []
  );

  return (
    <ScrollReveal id="Footer">
      <footer className="rounded-t-[25px] bg-neutral-900 px-8 pb-8 pt-12 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="mb-4 overflow-hidden text-4xl font-semibold">
            {t("footer.connect")}
          </h2>
          <UIButton
            as="a"
            variant="primary"
            size="sm"
            href="https://www.linkedin.com/in/tms5"
            target="_blank"
            rel="noreferrer"
            className="gap-2 py-2.5 font-medium"
          >
            Linkedin
          </UIButton>
        </div>

        <hr className="my-8 border-0 border-t border-neutral-700" />

        <div className="flex flex-wrap justify-between gap-8">
          <div className="min-w-[220px] flex-1">
            <div className="mb-4 flex items-center gap-2 text-xl">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-plum font-semibold text-white">
                <img src={logo} alt="Logo Thamires Morais" width="20" />
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-neutral-300">
              <Trans i18nKey="footer.description" />
            </p>
          </div>

          <div className="min-w-[220px] flex-1">
            <strong className="mb-4 block text-neutral-100">
              {t("footer.navigation")}
            </strong>
            <ul className="m-0 list-none p-0 text-neutral-300">
              {topics.map((topic) => (
                <li className="mb-2 text-sm" key={topic.index}>
                  <a
                    href={topic.href}
                    className="text-white no-underline transition hover:text-lavender"
                  >
                    {t(topic.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-[220px] flex-1">
            <strong className="mb-4 block text-neutral-100">
              {t("footer.contact")}
            </strong>
            <ul className="m-0 list-none p-0 text-neutral-300">
              <li className="mb-2 text-sm">thamiiresmorais2@gmail.com</li>
              <li className="mb-2 text-sm">linkedin.com/in/tms5</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-0 border-t border-neutral-700" />
        <p className="mt-8 text-center text-sm text-neutral-400">
          {t("footer.copyright")}
        </p>
      </footer>
    </ScrollReveal>
  );
}
