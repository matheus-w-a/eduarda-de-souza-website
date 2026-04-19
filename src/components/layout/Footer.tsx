import { Container } from "@/components/ui/Container";
import { nav, site } from "@/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-terracotta-500/10 bg-sand-100 py-12">
      <Container className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <p className="font-display text-xl text-terracotta-500">
            {site.name}
          </p>
          <p className="text-sm text-ink-muted">
            {site.role} · {site.credential}
          </p>
          <p className="text-sm text-ink-muted">{site.location}</p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-8 gap-y-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-terracotta-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="space-y-3 text-sm text-ink-muted">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer noopener"
            className="block transition-colors hover:text-terracotta-500"
          >
            Instagram · {site.instagram.handle}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="block transition-colors hover:text-terracotta-500"
          >
            {site.email}
          </a>
        </div>
      </Container>

      <Container className="mt-10 flex flex-col gap-2 border-t border-terracotta-500/10 pt-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
        <p>© {year} {site.name}. Todos os direitos reservados.</p>
        <p>
          Atendimento com hora marcada. Resultados variam conforme cada
          indivíduo.
        </p>
      </Container>
    </footer>
  );
}
