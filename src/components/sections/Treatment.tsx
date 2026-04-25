import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Otimização da saúde",
    description:
      "Antes de tratar a pele, olhamos para a saúde como um todo: rotina, alimentação e hábitos. Porque uma pele saudável começa de dentro para fora.",
  },
  {
    number: "02",
    title: "Skincare personalizado",
    description:
      "Uma rotina de cuidados pensada para a sua pele, com produtos que você encontra na farmácia e que cabem no seu bolso — sem nada genérico, tudo direcionado.",
  },
  {
    number: "03",
    title: "Plano de tratamento individual",
    description:
      "Um protocolo de procedimentos realizados em consultório, montado especificamente para o seu tipo de pele e particularidades, identificados durante a consulta.",
  },
];

export function Treatment() {
  return (
    <section id="tratamento" className="section bg-sand-50">
      <Container>
        <SectionTitle
          eyebrow="Tratamento"
          title={
            <>
              Um cuidado completo,
              <br />
              <span className="italic">em três etapas.</span>
            </>
          }
          description="Cada etapa é construída a partir de uma avaliação cuidadosa, porque nenhuma pele é igual à outra."
        />

        <ol className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="group relative flex flex-col gap-6 rounded-3xl border border-terracotta-500/10 bg-sand-100 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-terracotta-500/30 hover:shadow-card md:p-10"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-terracotta-500/30 font-display text-lg text-terracotta-500">
                  {step.number}
                </span>
                <span className="h-px flex-1 bg-terracotta-500/15 transition-all duration-500 group-hover:bg-terracotta-500/30" />
              </div>

              <h3 className="font-display text-2xl leading-tight text-terracotta-500">
                {step.title}
              </h3>

              <p className="text-ink-soft">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
