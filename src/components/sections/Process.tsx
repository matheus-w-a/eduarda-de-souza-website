import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    step: "01",
    title: "Avaliação cuidadosa",
    text: "Conversamos sobre a sua história, rotina e objetivos. Avalio a pele em profundidade para entender o que ela realmente precisa.",
  },
  {
    step: "02",
    title: "Plano personalizado",
    text: "Monto um protocolo feito para você, com etapas claras, prazos reais e orientação completa para casa.",
  },
  {
    step: "03",
    title: "Acompanhamento contínuo",
    text: "Seguimos juntas em cada etapa: ajustes, evolução e manutenção para preservar os resultados ao longo do tempo.",
  },
];

export function Process() {
  return (
    <section id="atendimento" className="section bg-sand-50">
      <Container>
        <SectionTitle
          eyebrow="Como funciona"
          title={
            <>
              Um percurso claro,
              <br />
              <span className="italic">do primeiro contato à manutenção.</span>
            </>
          }
        />

        <ol className="mt-14 grid gap-8 md:mt-20 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.step}
              className="relative rounded-3xl border border-terracotta-500/10 bg-sand-100 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-card md:p-10"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-terracotta-500/30 font-display text-lg text-terracotta-500">
                  {s.step}
                </span>
                <span className="h-px flex-1 bg-terracotta-500/15" />
              </div>
              <h3 className="mt-6 font-display text-xl text-terracotta-500">
                {s.title}
              </h3>
              <p className="mt-3 text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
