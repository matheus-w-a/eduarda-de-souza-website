import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

type Result = {
  src: string;
  alt: string;
};

const results: Result[] = [
  {
    src: "/antes-e-depois-melasma-1.jpeg",
    alt: "Antes e depois do tratamento de melasma",
  },
  {
    src: "/antes-e-depois-melasma-2.jpeg",
    alt: "Antes e depois do tratamento de melasma",
  },
  {
    src: "/antes-e-depois-melasma-3.jpeg",
    alt: "Antes e depois do tratamento de melasma",
  },
  {
    src: "/antes-e-depois-acne.jpeg",
    alt: "Antes e depois do tratamento de acne",
  },
];

export function Results() {
  return (
    <section id="resultados" className="section">
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Resultados"
          title={
            <>
              Transformações
              <br />
              <span className="italic">acompanhadas de perto.</span>
            </>
          }
        />

        <ul className="scrollbar-hide -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 md:mx-0 md:mt-16 md:grid md:snap-none md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {results.map((r) => (
            <li
              key={r.src}
              className="flex w-[85%] shrink-0 snap-center flex-col gap-4 md:w-auto md:shrink"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-sand-200 shadow-card">
                <img
                  src={r.src}
                  alt={r.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-2 max-w-2xl text-xs leading-relaxed text-ink-muted md:mt-8">
          *Imagens publicadas com autorização das pacientes. Cada pele é única —
          protocolos personalizados podem gerar resultados diferentes de pessoa
          para pessoa.
        </p>
      </Container>
    </section>
  );
}
