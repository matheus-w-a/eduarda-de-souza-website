import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const highlights = [
  "Biomedicina estética com foco em saúde da pele",
  "Protocolos individualizados e baseados em evidências",
  "Atendimento próximo, humano e discreto",
];

export function About() {
  return (
    <section id="sobre" className="section">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-sand-200 shadow-card">
            {/* Placeholder — substituir por retrato/ambiente do consultório */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-terracotta-100 via-sand-200 to-sand-100"
            />
            <div className="relative flex h-full items-end p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta-500/70">
                [placeholder · retrato ou ambiente clínico]
              </p>
            </div>
          </div>
          <span
            aria-hidden="true"
            className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-full border border-terracotta-500/20 lg:block"
          />
        </div>

        <div className="order-1 lg:order-2">
          <SectionTitle
            eyebrow="Sobre a profissional"
            title={
              <>
                Cuidado sensível,
                <br />
                <span className="italic">respaldo científico.</span>
              </>
            }
            description="A Dra. Eduarda De Souza é biomédica esteta dedicada à saúde da pele feminina. Seu trabalho reúne conhecimento técnico e um olhar atento para cada história, criando tratamentos personalizados que priorizam segurança, naturalidade e resultados consistentes."
          />

          <ul className="mt-10 space-y-4">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-ink-soft"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-terracotta-500"
                />
                <span className="text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm italic text-ink-muted">
            * Formação, especializações e CRBM serão detalhados em breve.
          </p>
        </div>
      </Container>
    </section>
  );
}
