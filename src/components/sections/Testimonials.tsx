import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GoogleIcon } from "@/components/ui/GoogleIcon";
import { site } from "@/constants/site";

type Review = {
  text: string;
  name: string;
  when: string;
  rating: number;
};

const reviews: Review[] = [
  {
    text: "Eu procurei a Dra. Eduarda com queixas a respeito de manchas de acne na minha pele. Decidimos realizar peeling e o resultado foi ótimo! Além disso, todo o apoio pré e pós tratamento foram importantes para me sentir segura de ter feito a escolha certa. Já está na hora de voltar!",
    name: "Marina Daros",
    when: "um ano atrás",
    rating: 5,
  },
  {
    text: "Procurei a Dra. Eduarda para que avaliasse minhas manchas na pele. Ela foi muito atenciosa e olhou para tudo, desde meus exames, até avaliação da pele para entender o que podia estar acontecendo. A partir disso ela montou um protocolo de tratamento para manchas e eu amei. Além disso, é nítido o conhecimento que ela tem, baita profissional!",
    name: "Laura Lia",
    when: "um ano atrás",
    rating: 5,
  },
  {
    text: "Super recomendo o trabalho da Dra. Eduarda. Amei ser cuidada por você, o atendimento personalizado faz toda a diferença.",
    name: "Bianca Carolina Marcos",
    when: "4 meses atrás",
    rating: 5,
  },
  {
    text: "Uma profissional excelente, com o acompanhamento impecável, dicas maravilhosas, dedicação e amor pelo que faz, recomendo muito.",
    name: "Claudia Vieira",
    when: "um mês atrás",
    rating: 5,
  },
  {
    text: "Tratamento para melasma muito eficaz! Ótimo atendimento!",
    name: "N. Fiscal",
    when: "6 meses atrás",
    rating: 5,
  },
];

const loop = [...reviews, ...reviews, ...reviews];

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      aria-label={`${rating} de 5 estrelas`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill={i < rating ? "#F5B400" : "rgba(0,0,0,0.12)"}
          aria-hidden="true"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const mql = window.matchMedia("(min-width: 768px)");
    const total = reviews.length;

    const itemSize = () => {
      const first = el.children[0] as HTMLElement | undefined;
      if (!first) return 0;
      const styles = window.getComputedStyle(el);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");
      return first.getBoundingClientRect().width + gap;
    };

    const center = () => {
      if (mql.matches) return;
      el.scrollLeft = itemSize() * total;
    };

    const onScroll = () => {
      if (mql.matches) return;
      const size = itemSize();
      if (size === 0) return;
      const left = el.scrollLeft;
      const blockWidth = size * total;

      if (left < blockWidth * 0.5) {
        el.scrollLeft = left + blockWidth;
      } else if (left > blockWidth * 2.5) {
        el.scrollLeft = left - blockWidth;
      }
    };

    const onResize = () => center();
    const onChange = () => center();

    requestAnimationFrame(center);
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    mql.addEventListener("change", onChange);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      mql.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <section id="depoimentos" className="section">
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Avaliações verificadas"
          title={
            <>
              Histórias que se cuidam
              <br />
              <span className="italic">com confiança.</span>
            </>
          }
          description="Depoimentos publicados por pacientes no perfil do Google."
        />

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-soft">
          <GoogleIcon className="h-5 w-5" />
          <Stars rating={site.google.rating} />
          <span className="font-medium text-ink">{site.google.rating.toFixed(1).replace(".", ",")}</span>
          <span aria-hidden="true">·</span>
          <span>no Google</span>
        </div>

        <div
          ref={trackRef}
          className="scrollbar-hide -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 md:mx-0 md:mt-16 md:grid md:snap-none md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
        >
          {loop.map((t, i) => {
            const isExtra = i < reviews.length || i >= reviews.length * 2;
            return (
              <figure
                key={i}
                aria-hidden={isExtra ? true : undefined}
                className={`flex w-[85%] shrink-0 snap-center flex-col justify-between rounded-3xl border border-terracotta-500/10 bg-sand-50 p-8 transition-all duration-500 md:h-full md:w-auto md:shrink md:p-10 md:hover:-translate-y-1 md:hover:shadow-card ${
                  isExtra ? "md:hidden" : ""
                }`}
              >
                <div>
                  <Stars rating={t.rating} />
                  <span
                    aria-hidden="true"
                    className="mt-4 block font-display text-5xl leading-none text-terracotta-500/30"
                  >
                    “
                  </span>
                  <blockquote className="mt-2 font-display text-lg leading-relaxed text-ink">
                    {t.text}
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex items-center justify-between gap-3 border-t border-terracotta-500/10 pt-5 text-sm text-ink-muted">
                  <div className="min-w-0">
                    <span className="block truncate font-medium text-terracotta-500">
                      {t.name}
                    </span>
                    <span>{t.when}</span>
                  </div>
                  <GoogleIcon className="h-5 w-5 shrink-0" aria-label="Avaliação do Google" />
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <a
            href={site.google.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-terracotta-500/30 bg-sand-50 px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta-500/60 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-100"
          >
            <GoogleIcon className="h-4 w-4" />
            Ver todas as avaliações no Google
          </a>
        </div>
      </Container>
    </section>
  );
}
