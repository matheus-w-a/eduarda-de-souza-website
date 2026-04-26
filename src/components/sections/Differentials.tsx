import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

type Item = {
  title: string;
  text: string;
  mobileOnly?: boolean;
};

const items: Item[] = [
  {
    title: "Avaliação individualizada",
    text: "Nenhum protocolo pronto. Cada tratamento começa com uma leitura atenta da sua pele, rotina e objetivos.",
  },
  {
    title: "Skincare acessível",
    text: "Indicação de produtos que você encontra na farmácia e que cabem no seu bolso — escolhidos especificamente para a sua pele.",
  },
  {
    title: "Autonomia no dia a dia",
    text: "Você não fica refém de procedimentos: aprende a manter os resultados sozinha em casa, com uma rotina simples e efetiva.",
  },
  {
    title: "Acompanhamento de longo prazo",
    text: "Você conta com meu acompanhamento pessoal por 1 ano completo — suporte de verdade durante todo o processo e na manutenção dos resultados.",
  },
  {
    title: "Tratamento que respeita a pele",
    text: "Sem procedimentos agressivos: condutas seguras, graduais e que preservam a barreira cutânea.",
    mobileOnly: true,
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="section">
      <Container>
        <SectionTitle eyebrow="" title="Diferenciais" />

        <div className="mt-14 grid gap-x-12 gap-y-10 md:mt-20 md:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`flex gap-6 ${item.mobileOnly ? "md:hidden" : ""}`}
            >
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
