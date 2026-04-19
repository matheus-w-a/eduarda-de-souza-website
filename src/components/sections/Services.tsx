import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl } from "@/constants/site";

type Service = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Tratamento de melasma",
    description:
      "Protocolo dedicado ao clareamento seguro e gradual de manchas, com controle da hiperpigmentação e foco em resultados duradouros.",
    bullets: [
      "Avaliação detalhada da pele",
      "Combinação de ativos clínicos e domiciliares",
      "Estratégia de manutenção a longo prazo",
    ],
  },
  {
    number: "02",
    title: "Tratamento de espinhas e rosácea",
    description:
      "Condutas específicas para pele oleosa, acneica e reativa, reduzindo inflamação, sensibilidade e marcas — com respeito à barreira cutânea.",
    bullets: [
      "Diagnóstico individualizado",
      "Controle de inflamação e oleosidade",
      "Redução de marcas e vermelhidão",
    ],
  },
  {
    number: "03",
    title: "Skincare personalizado",
    description:
      "Formulação exclusiva, pensada para as necessidades reais da sua pele e para a sua rotina — nada genérico, tudo direcionado.",
    bullets: [
      "Ativos escolhidos individualmente",
      "Rotina simples e efetiva",
      "Ajustes ao longo do tratamento",
    ],
  },
];

export function Services() {
  return (
    <section
      id="procedimentos"
      className="section bg-sand-50"
    >
      <Container>
        <SectionTitle
          eyebrow="Procedimentos"
          title={
            <>
              Tratamentos que combinam
              <br />
              <span className="italic">ciência e sensibilidade.</span>
            </>
          }
          description="Cada protocolo é construído a partir de uma avaliação cuidadosa, porque nenhuma pele é igual à outra."
        />

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative flex flex-col gap-6 rounded-3xl border border-terracotta-500/10 bg-sand-100 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-terracotta-500/30 hover:shadow-card md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-4xl italic text-terracotta-500/30">
                  {service.number}
                </span>
                <span className="h-px w-10 bg-terracotta-500/30 transition-all duration-500 group-hover:w-16" />
              </div>

              <h3 className="font-display text-2xl leading-tight text-terracotta-500">
                {service.title}
              </h3>

              <p className="text-ink-soft">{service.description}</p>

              <ul className="mt-auto space-y-2 border-t border-terracotta-500/10 pt-6 text-sm text-ink-muted">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-[5px] w-[5px] shrink-0 rounded-full bg-terracotta-500/60"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <p className="prose-soft max-w-lg">
            Não sabe qual tratamento é o ideal para você? Converse comigo e
            encontramos o caminho juntas.
          </p>
          <Button
            as="a"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            size="lg"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Tirar dúvidas no WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
