import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function About() {
  return (
    <section id="sobre" className="section">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
        <div className="relative lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-sand-200 shadow-card">
            <img
              src="/eduarda-foto-1.webp"
              alt="Dra. Eduarda De Souza, biomédica esteta"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <span
            aria-hidden="true"
            className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-full border border-terracotta-500/20 lg:block"
          />
        </div>

        <div className="lg:order-2">
          <SectionTitle
            eyebrow="Sobre mim"
            title={<>A liberdade de sentir-se bem na própria pele</>}
            description="Sofri por muito tempo com acne e sei como é triste se ver refém da maquiagem e não se sentir bem na própria pele. Como biomédica esteta, dedico minha carreira a trazer essa mesma liberdade e confiança que consegui alcançar para quem sofre com acne e melasma, sem métodos agressivos e sem gastar horrores com cosméticos."
          />
        </div>
      </Container>
    </section>
  );
}
