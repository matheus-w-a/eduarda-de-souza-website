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

export function Testimonials() {
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

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex h-full flex-col justify-between rounded-3xl border border-terracotta-500/10 bg-sand-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-card md:p-10"
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
          ))}
        </div>
      </Container>
    </section>
  );
}
