import "./Contato.css";
import "./Contato.scss";
import { Trans, useTranslation } from "react-i18next";

export default function Contato() {
  const { t } = useTranslation();

  return (
    <>
      <div class="container-tech-banner">
        <div className="tech-banner">
          <div className="tech-track">
            <div className="tech-text">
              React ★ Vue ★ Svelte ★ TypeScript ★ Lit ★ JavaScript ★ CSS ★ Sass
              ★ HTML ★ Lit ★ Tailwind CSS ★ &nbsp;
            </div>
            <div className="tech-text">
              React ★ Vue ★ Svelte ★ TypeScript ★ Lit ★ JavaScript ★ CSS ★ Sass
              ★ HTML ★ Lit ★ Tailwind CSS ★&nbsp;
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray font-barlow text-center d-grid" id="Contato">
        <div className="container d-flex flex-column align-items-center justify-content-center g-2 p-3">
          <section className="contact-section">
            <div className="contact-box">
              <h2>
                <Trans
                  i18nKey="projeto_incrivel"
                  components={{ span: <span />, br: <br /> }}
                />
              </h2>
              <a
                href="https://www.linkedin.com/in/tms5"
                target="_blank"
                rel="noreferrer"
                className="linkedin-btn"
              >
                Linkedin
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
