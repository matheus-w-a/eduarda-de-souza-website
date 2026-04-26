import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { buildWhatsappUrl } from "@/constants/site";

type Treatment = {
  name: string;
  focus: string;
  message: string;
};

const treatments: Treatment[] = [
  {
    name: "Pele Lisinha",
    focus: "Acne e cravos",
    message:
      "Olá, Dra. Eduarda! Vim pelo site e gostaria de saber mais sobre o tratamento Pele Lisinha (acne e cravos).",
  },
  {
    name: "Pele Livre de Manchas",
    focus: "Melasma e Sardas",
    message:
      "Olá, Dra. Eduarda! Vim pelo site e gostaria de saber mais sobre o tratamento Pele Real (melasma).",
  },
  {
    name: "Pele Iluminada",
    focus: "SkinCare Personalizado",
    message:
      "Olá, Dra. Eduarda! Vim pelo site e gostaria de saber mais sobre o tratamento Pele Iluminada (skincare).",
  },
];

export function Treatments() {
  return (
    <section id="tratamentos" className="section">
      <Container>
        <SectionTitle
          eyebrow="Tratamentos"
          title={<>Protocolos personalizados.</>}
          description="Cada tratamento é desenhado a partir da sua avaliação, com foco em resultados consistentes e duradouros."
        />

        <ul className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
          {treatments.map((treatment) => (
            <li
              key={treatment.name}
              className="group relative flex flex-col gap-5 rounded-3xl border border-terracotta-500/10 bg-sand-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-sand-50 hover:bg-terracotta-500 hover:shadow-card md:p-10"
            >
              <span className="eyebrow transition-colors duration-500 group-hover:text-sand-50/80">
                {treatment.focus}
              </span>

              <h3 className="font-display text-3xl leading-tight text-terracotta-500 transition-colors duration-500 group-hover:text-sand-50">
                {treatment.name}
              </h3>

              <span className="mt-auto h-px w-full bg-terracotta-500/15 transition-all duration-500 group-hover:bg-sand-50/30" />

              <a
                href={buildWhatsappUrl(treatment.message)}
                target="_blank"
                rel="noreferrer noopener"
                className="self-start font-display text-sm uppercase tracking-[0.2em] text-terracotta-500 underline decoration-terracotta-500/40 decoration-1 underline-offset-[6px] transition-colors duration-500 hover:decoration-terracotta-500 group-hover:text-sand-50 group-hover:decoration-sand-50/60 group-hover:hover:decoration-sand-50"
              >
                Saiba mais
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
