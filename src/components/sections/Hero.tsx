import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl } from "@/constants/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-20 pt-10 md:pb-28 md:pt-16 lg:pt-24"
    >
      {/* Sutileza visual: círculo suave de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full bg-terracotta-100/40 blur-3xl md:top-0"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-fade-up">
          <span className="eyebrow">Biomedicina Estética</span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tightest text-terracotta-500 md:text-5xl lg:text-6xl">
            Pele saudável,
            <br />
            equilibrada e com a sua
            <span className="italic"> essência.</span>
          </h1>

          <p className="prose-soft mt-7 max-w-xl">
            Cuidado dedicado à saúde da sua pele — tratamento de melasma, acne,
            rosácea e skincare personalizado. Protocolos com base científica,
            conduzidos com sensibilidade e respeito à sua história.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              as="a"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              size="lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar avaliação
            </Button>
            <Button as="a" href="#procedimentos" variant="outline" size="lg">
              Conhecer procedimentos
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-terracotta-500/15 pt-8 text-sm">
            <div>
              <dt className="eyebrow">Especialidade</dt>
              <dd className="mt-2 font-display text-xl text-terracotta-500">
                Melasma
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Abordagem</dt>
              <dd className="mt-2 font-display text-xl text-terracotta-500">
                Individual
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Base</dt>
              <dd className="mt-2 font-display text-xl text-terracotta-500">
                Científica
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative animate-fade-in">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-sand-200 shadow-soft">
            <img
              src="/eduarda-foto-1.webp"
              alt="Dra. Eduarda De Souza, biomédica esteta"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden max-w-[15rem] rounded-2xl bg-sand-50 p-5 shadow-card md:block">
            <p className="font-display text-sm italic text-terracotta-500">
              "Resultados que respeitam o tempo e a saúde da sua pele."
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
