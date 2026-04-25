import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site, whatsappUrl } from "@/constants/site";

export function Contact() {
  return (
    <section id="contato" className="section bg-terracotta-500 text-sand-50">
      <Container size="narrow" className="text-center">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-sand-100/70">
          Contato
        </span>
        <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tightest text-sand-50 md:text-5xl lg:text-6xl">
          Você está pronta para e viver sua fase mais{" "}
          <span className="italic">livre</span> e{" "}
          <span className="italic">confiante?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-sand-100/85 md:text-lg">
          Marque sua consulta pelo WhatsApp e inicie sua transformação.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Button
            as="a"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            size="lg"
            className="!bg-sand-50 !text-terracotta-500 hover:!bg-sand-100 hover:!text-terracotta-600"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp
          </Button>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-sand-100/80 underline-offset-4 transition-colors hover:text-sand-50 hover:underline"
          >
            ou me encontre em {site.instagram.handle}
          </a>
        </div>
      </Container>
    </section>
  );
}
