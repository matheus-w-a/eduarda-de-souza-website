import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { nav, site, whatsappUrl } from "@/constants/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-30 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-terracotta-500/10 bg-sand-100/85 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-5 md:py-6">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-terracotta-500 md:text-xl"
        >
          Dra. Eduarda De Souza
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-terracotta-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            as="a"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            size="md"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full border border-terracotta-500/30 text-terracotta-500 transition-colors hover:bg-terracotta-500 hover:text-sand-50 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex h-3 w-5 flex-col justify-between">
            <span
              className={`block h-[1.5px] w-full bg-current transition-transform ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-current transition-transform ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </Container>

      <div
        className={`fixed inset-0 z-20 bg-sand-100 transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <Container className="flex h-full flex-col justify-center gap-10 pt-24">
          <nav className="flex flex-col gap-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-terracotta-500"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button
            as="a"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            size="lg"
            className="self-start"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp
          </Button>
          <p className="text-sm text-ink-muted">{site.instagram.handle}</p>
        </Container>
      </div>
    </header>
  );
}
