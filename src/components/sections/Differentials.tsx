import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const items = [
  {
    title: "Avaliação individualizada",
    text: "Nenhum protocolo pronto. Cada tratamento começa com uma leitura atenta da sua pele, rotina e objetivos.",
  },
  {
    title: "Protocolos exclusivos",
    text: "Combinações técnicas cuidadosamente escolhidas, com ativos de qualidade e progressão gradual.",
  },
  {
    title: "Base científica",
    text: "Atualização constante e condutas embasadas, priorizando segurança e resultados reais.",
  },
  {
    title: "Atendimento acolhedor",
    text: "Ambiente tranquilo, escuta próxima e acompanhamento de verdade — do diagnóstico à manutenção.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="section">
      <Container>
        <SectionTitle
          eyebrow="Diferenciais"
          title={
            <>
              Um cuidado pensado
              <br />
              <span className="italic">para cada detalhe.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-x-12 gap-y-10 md:mt-20 md:grid-cols-2">
          {items.map((item, i) => (
            <div key={item.title} className="flex gap-6">
              <span
                aria-hidden="true"
                className="font-display text-xl italic text-terracotta-500/40"
              >
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-xl text-terracotta-500">
                  {item.title}
                </h3>
                <p className="mt-3 text-ink-soft">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
