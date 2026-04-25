import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

/**
 * NOTE: textos abaixo são PLACEHOLDERS elegantes — substituir
 * por depoimentos reais (com autorização de uso).
 */
const testimonials = [
  {
    text: "Foi a primeira vez que me senti realmente escutada em um tratamento de pele. O protocolo fez sentido do início ao fim.",
    name: "Paciente · Marina D.",
    detail: "Tratamento de melasma",
  },
  {
    text: "Minha pele está mais equilibrada, as marcas diminuíram e a rotina se tornou simples. O acompanhamento faz toda a diferença.",
    name: "Paciente · Laura L.",
    detail: "Acne e rosácea",
  },
  {
    text: "O skincare personalizado mudou a forma como cuido da minha pele. Cada produto tem um propósito claro.",
    name: "Paciente · Julia S.",
    detail: "Skincare personalizado",
  },
];

const loop = [...testimonials, ...testimonials, ...testimonials];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const mql = window.matchMedia("(min-width: 768px)");
    const total = testimonials.length;

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
          eyebrow="Experiências"
          title={
            <>
              Histórias que se cuidam
              <br />
              <span className="italic">com confiança.</span>
            </>
          }
          description="Depoimentos de pacientes que escolheram um caminho mais consciente para a saúde da pele."
        />

        <div
          ref={trackRef}
          className="scrollbar-hide -mx-5 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 md:mx-0 md:mt-20 md:grid md:snap-none md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
        >
          {loop.map((t, i) => {
            const isExtra = i < testimonials.length || i >= testimonials.length * 2;
            return (
              <figure
                key={i}
                aria-hidden={isExtra ? true : undefined}
                className={`flex w-[85%] shrink-0 snap-center flex-col justify-between rounded-3xl border border-terracotta-500/10 bg-sand-50 p-8 transition-all duration-500 md:h-full md:w-auto md:shrink md:p-10 md:hover:-translate-y-1 md:hover:shadow-card ${
                  isExtra ? "md:hidden" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="font-display text-5xl leading-none text-terracotta-500/30"
                >
                  “
                </span>
                <blockquote className="mt-4 font-display text-lg leading-relaxed text-ink">
                  {t.text}
                </blockquote>
                <figcaption className="mt-8 border-t border-terracotta-500/10 pt-5 text-sm text-ink-muted">
                  <span className="block font-medium text-terracotta-500">
                    {t.name}
                  </span>
                  <span>{t.detail}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
