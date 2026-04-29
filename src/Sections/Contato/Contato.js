import { Trans } from "react-i18next";
import { UIButton } from "../../components/ui";

const techText =
  "React * Vue * Svelte * TypeScript * Lit * JavaScript * CSS * Sass * HTML * Tailwind CSS *";

export default function Contato() {
  return (
    <>
      <div className="relative flex h-[113px] w-full items-center justify-center overflow-hidden rounded-2xl bg-plum">
        <div className="-ml-2.5 mt-1 h-[42px] w-[103%] -rotate-3 overflow-hidden rounded-sm bg-white">
          <div className="flex w-max animate-scroll-left">
            {[0, 1].map((item) => (
              <div
                className="whitespace-nowrap text-[1.6rem] font-semibold text-plum"
                key={item}
              >
                {techText}&nbsp;
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid bg-mist text-center" id="Contato">
        <div className="container flex flex-col items-center justify-center gap-8 p-12">
          <section className="relative px-4 py-2 text-center">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-slate-700 [&_.highlight-alt]:text-orchid [&_.highlight]:text-plum">
                <Trans
                  i18nKey="projeto_incrivel"
                  components={{ span: <span />, br: <br /> }}
                />
              </h2>
              <UIButton
                as="a"
                variant="primary"
                size="md"
                href="https://www.linkedin.com/in/tms5"
                target="_blank"
                rel="noreferrer"
                className="px-8 font-bold"
              >
                Linkedin
              </UIButton>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
