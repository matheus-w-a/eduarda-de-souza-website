# Dra. Eduarda De Souza — Website v1

Landing page profissional para a **Dra. Eduarda De Souza** (Biomédica Esteta / @dradudasouza).
Versão 1: página única, elegante e feminina, com CTA direto para WhatsApp.

## Stack

- **React 18** + **TypeScript**
- **React Router v7** (modo data-router, pronto para expandir)
- **Tailwind CSS 3** (tema customizado com paleta sand/terracotta)
- **Vite 6**
- **Google Fonts**: Fraunces (display) + Inter (sans)

## Instalação

```bash
npm install
npm run dev
```

Abrir em `http://localhost:5173`.

## Scripts

| Comando            | Descrição                        |
| ------------------ | -------------------------------- |
| `npm run dev`      | Servidor de desenvolvimento      |
| `npm run build`    | Build de produção (`/dist`)      |
| `npm run preview`  | Preview local do build           |
| `npm run lint`     | Type-check com TypeScript        |

## Estrutura

```
src/
├── assets/                 # (futuro) imagens, ícones, etc.
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, About, Services, Differentials, Process, Testimonials, Contact
│   └── ui/                 # Button, Container, SectionTitle, WhatsAppIcon, FloatingWhatsApp
├── constants/
│   └── site.ts             # Textos/contato/WhatsApp centralizados
├── pages/
│   └── Home.tsx            # Página principal
├── routes/
│   └── index.tsx           # Config React Router v7
├── styles/
│   └── globals.css         # Tailwind + tokens globais
├── main.tsx                # Entry
└── vite-env.d.ts
```

## Pontos de substituição (placeholders)

Tudo está marcado em comentários `[placeholder]` no código e/ou em `src/constants/site.ts`:

1. **WhatsApp** — `src/constants/site.ts` → `site.whatsapp.number` (formato internacional sem símbolos: `55DDDNUMERO`)
2. **CRBM / cidade / e-mail** — `src/constants/site.ts`
3. **Imagens** (Hero + About) — hoje são gradientes placeholder; trocar por fotos reais em `public/` ou `src/assets/`
4. **Depoimentos** — `src/components/sections/Testimonials.tsx` (3 cards de exemplo)
5. **Meta `og:image`** — trocar `public/og-image.jpg` (1200x630 recomendado)

## Direção visual

- Paleta: fundo `#F6F1EB` (sand), títulos `#7C491D` (terracotta), acentos em nude/creme
- Tipografia: **Fraunces** (serifada, display premium) para títulos + **Inter** para corpo
- Muito respiro, hierarquia clara, transições suaves, hover discreto
- WhatsApp flutuante fixo + CTA em seção final

## Sugestão de imagens

- **Hero**: retrato lateral da profissional em tons naturais, fundo neutro (creme/nude), iluminação suave
- **Sobre**: ambiente clínico clean OU detalhe de mãos/procedimento, mesma paleta
- **Depoimentos (futuro)**: avatares circulares pequenos ou apenas tipografia (o layout atual funciona bem sem imagens)

## SEO

- `index.html` já contém: `<title>`, `description`, `canonical`, OpenGraph, Twitter Card, `theme-color`, `lang="pt-BR"` e JSON-LD (`MedicalBusiness`).
- Ajustar `url` e adicionar `og-image.jpg` antes do deploy.

## Evolução futura

- Adicionar novas rotas em `src/routes/index.tsx` (ex.: `/procedimentos/melasma`)
- Extrair conteúdo para um CMS (MDX, Sanity, etc.)
- Adicionar formulário de contato (v2)
- Analytics (Plausible, GA4)

## Acessibilidade

- Semântica com `header/main/section/footer/nav`
- `aria-label` em navegação, botões e diálogos
- `focus-visible` destacado com `ring` terracotta
- `prefers-reduced-motion` implícito (animações leves, duração curta)

---

Código pronto para instalar e rodar. Em caso de dúvidas, revise `src/constants/site.ts` primeiro — é lá que fica a maior parte do conteúdo substituível.
