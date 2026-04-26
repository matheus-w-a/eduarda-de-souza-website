/**
 * Central source of truth for copy, contact and navigation.
 * Substituir campos marcados como [placeholder] por dados reais da profissional.
 */

export const site = {
  name: "Dra. Eduarda De Souza",
  role: "Biomédica Esteta",
  credential: "CRBM-5 7764",
  location: "Joinville - Santa Catarina",
  instagram: {
    handle: "@dradudasouza",
    url: "https://www.instagram.com/dradudasouza/",
  },
  whatsapp: {
    // Formato internacional, sem símbolos. Ex.: 5541999999999
    number: "5547991648791",
    message:
      "Olá, Dra. Eduarda! Vim pelo site e gostaria de saber mais sobre os atendimentos.",
  },
  email: "dsouzae7@gmail.com",
  google: {
    profileUrl: "https://maps.app.goo.gl/9dw2FbH66tTAAUbeA",
    rating: 5,
  },
} as const;

export const whatsappUrl = (() => {
  const base = `https://wa.me/${site.whatsapp.number}`;
  const text = encodeURIComponent(site.whatsapp.message);
  return `${base}?text=${text}`;
})();

export const buildWhatsappUrl = (message: string) => {
  const base = `https://wa.me/${site.whatsapp.number}`;
  const text = encodeURIComponent(message);
  return `${base}?text=${text}`;
};

export const nav = [
  { label: "Sobre mim", href: "#sobre" },
  { label: "Método", href: "#metodo" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
] as const;
