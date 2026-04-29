import profilepic from "../../Assets/Img/IMG_7997.png";
import { useTranslation } from "react-i18next";
import { UIButton, UIIcon } from "../../components/ui";

export default function Inicio() {
  const { t } = useTranslation();
  const pdfPath = "/CV/CV-Thamires-Morais.pdf";

  const fadeIn = (delay) => ({
    animation: `fade-slide-up 0.7s ease-out ${delay} forwards`,
    animationDelay: delay,
  });

  const blobIn = (delay) => ({
    animation: `blob-enter 0.9s ease-out ${delay} both`,
  });

  const profileIn = (delay) => ({
    animation: `zoom-in-profile 0.9s ease-out ${delay} both`,
  });

  return (
    <>
      <style>
        {`
          @keyframes fade-slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes zoom-in-profile {
            from { opacity: 0; transform: scale(0.9) translateY(24px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }

          @keyframes blob-enter {
            from { opacity: 0; transform: scale(0.86) rotate(-8deg); }
            to { opacity: 0.82; transform: scale(1) rotate(0); }
          }

          @keyframes dash-draw {
            to { stroke-dashoffset: 0; }
          }
        `}
      </style>
      <section
        className="container max-height-[100vh] grid min-h-screen grid-cols-1 items-center gap-6 overflow-visible pt-24 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] md:pt-[50px]"
        id="Inicio"
      >
        <div className="overflow-visible text-left text-neutral-950 md:text-left">
          <p
            className="mb-3 overflow-visible text-sm font-extrabold uppercase tracking-[0.14em] text-plum-700 opacity-0 animate-fade-slide-up sm:text-base"
            style={fadeIn("0.05s")}
          >
            {t("inicio.hello")}
          </p>
          <h1
            className="m-0 overflow-visible text-[3.55rem] font-extrabold leading-[1.08] text-neutral-950 opacity-0 animate-fade-slide-up sm:text-[4.5rem] lg:text-[7.2rem]"
            style={fadeIn("0.14s")}
          >
            <span>Thamires</span>
          </h1>
          <h2
            className="mx-auto mt-7 max-w-[760px] overflow-visible text-[1.6rem] font-extrabold leading-[1.22] text-neutral-950 opacity-0 animate-fade-slide-up [&_span]:text-plum-700 md:mx-0 lg:text-[2.15rem]"
            style={fadeIn("0.24s")}
            dangerouslySetInnerHTML={{ __html: t("inicio.headline") }}
          />
          <p
            className="mx-auto mt-4 max-w-xl overflow-visible text-[1.05rem] leading-relaxed text-slate-700 opacity-0 animate-fade-slide-up md:mx-0"
            style={fadeIn("0.34s")}
          >
            {t("inicio.description")}
          </p>

          <div
            className="mt-8 flex flex-col flex-wrap gap-4 overflow-visible py-2 opacity-0 animate-fade-slide-up sm:flex-row md:justify-start"
            style={fadeIn("0.44s")}
          >
            <UIButton
              as="a"
              variant="primary"
              size="lg"
              href="#Portfolio"
            >
              {t("inicio.view_projects")}
            </UIButton>
            <UIButton
              as="a"
              variant="outline"
              size="lg"
              className="border-plum/45 bg-white/70 hover:bg-white hover:text-plum"
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("inicio.view_cv")}
            </UIButton>
          </div>
        </div>

        <div
          className="relative grid min-h-[510px] place-items-center overflow-visible md:min-h-[clamp(460px,58vw,690px)] md:place-items-end md:pr-8 lg:pr-0"
          aria-label="Thamires Morais"
        >
          <div
            className="absolute bottom-[11%] left-[4%] right-[5%] top-[7%] rounded-[48%_52%_40%_60%/50%_42%_58%_50%] bg-[radial-gradient(circle_at_45%_30%,#eadcff_0_28%,#d9c2f4_29%_100%)] opacity-0 animate-blob-enter"
            style={blobIn("0.18s")}
          />
          <div
            className="absolute right-[3%] top-[4%] h-[92px] w-[92px] bg-[radial-gradient(rgba(90,13,115,0.22)_2px,transparent_2px)] bg-[length:14px_14px] opacity-0 animate-fade-slide-up"
            style={fadeIn("0.48s")}
          />
          <div
            className="absolute bottom-[16%] left-[2%] h-[92px] w-[92px] bg-[radial-gradient(rgba(90,13,115,0.22)_2px,transparent_2px)] bg-[length:14px_14px] opacity-0 animate-fade-slide-up"
            style={fadeIn("0.58s")}
          />
          <svg
            className="absolute left-[9%] top-[18%] h-[78px] w-[78px] fill-none stroke-[#b99ee0] stroke-[5] [stroke-linecap:round] opacity-0 animate-fade-slide-up"
            style={{
              animationDelay: "0.52s",
              strokeDasharray: 120,
              strokeDashoffset: 120,
              animation:
                "fade-slide-up 0.5s ease-out 0.52s forwards, dash-draw 0.9s ease-out 0.58s forwards",
            }}
            viewBox="0 0 64 64"
            aria-hidden="true"
          >
            <path d="M19 13c9 12 17 20 30 29" />
            <path d="M13 31c8 2 15 5 22 10" />
            <path d="M35 7c2 8 5 15 11 21" />
          </svg>
          <img
            src={profilepic}
            alt="Thamires Morais"
            className="relative z-[2] mx-auto max-w-[min(480px,92vw)] object-contain object-bottom opacity-0 drop-shadow-[0_30px_35px_rgba(62,0,82,0.16)] animate-zoom-in-profile md:mx-0 md:max-w-[calc(100vh-267px)]"
            style={profileIn("0.32s")}
          />
          <div
            className="p-8 absolute bottom-[5%] right-[20%] z-[4] min-w-[190px] translate-x-1/2 opacity-0 animate-fade-slide-up md:bottom-[17%] md:right-0 md:min-w-[210px] md:translate-x-0"
            style={{
              ...fadeIn("0.72s"),
            }}
          >
            <div
              className="experience-float-card grid grid-cols-[auto_auto] items-center gap-x-4 rounded-2xl border border-plum/10 bg-lavender px-4 py-4 text-plum shadow-[0_20px_50px_rgba(62,0,82,0.14)] backdrop-blur"
              style={{ gridTemplateAreas: '"icon years" "icon text"' }}
            >
              <UIIcon
                className="grid h-10 w-10 place-items-center rounded-full bg-lavender-200 text-sm text-plum-700"
                name="star"
                size={16}
              />
              <strong
                className="text-xl leading-tight"
                style={{ gridArea: "years" }}
              >
                {t("inicio.years")}
              </strong>
              <small
                className="text-sm text-slate-700"
                style={{ gridArea: "text" }}
              >
                {t("inicio.experience")}
              </small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
