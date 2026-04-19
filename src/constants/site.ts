/**
 * Central source of truth for copy, contact and navigation.
 * Substituir campos marcados como [placeholder] por dados reais da profissional.
 */

export const site = {
  name: "Dra. Eduarda De Souza",
  role: "Biomédica Esteta",
  credential: "CRBM [placeholder]",
  location: "[Cidade / Estado — placeholder]",
  instagram: {
    handle: "@dradudasouza",
    url: "https://www.instagram.com/dradudasouza/",
  },
  whatsapp: {
    // Formato internacional, sem símbolos. Ex.: 5541999999999
    number: "5500000000000",
    message:
      "Olá, Dra. Eduarda! Vim pelo site e gostaria de saber mais sobre os atendimentos.",
  },
  email: "contato@dradudasouza.com.br",
} as const;

export const whatsappUrl = (() => {
  const base = `https://wa.me/${site.whatsapp.number}`;
  const text = encodeURIComponent(site.whatsapp.message);
  return `${base}?text=${text}`;
})();

export const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
] as const;
