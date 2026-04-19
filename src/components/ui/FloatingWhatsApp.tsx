import { whatsappUrl } from "@/constants/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar com a Dra. Eduarda no WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta-500 text-sand-50 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-terracotta-600 md:h-16 md:w-16"
    >
      <WhatsAppIcon className="h-6 w-6 md:h-7 md:w-7" />
      <span className="pointer-events-none absolute -top-10 right-0 hidden rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-sand-50 opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 md:block">
        Fale no WhatsApp
      </span>
    </a>
  );
}
