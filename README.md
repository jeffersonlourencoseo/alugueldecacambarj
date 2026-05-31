# CaçambaRápido — Aluguel de Caçambas e Retirada de Entulho

Site institucional de alta conversão e performance, desenvolvido com foco em **SEO Local**, **acessibilidade** e **experiência do usuário**. Projeto pronto para deploy em produção.

---

## Sobre o Projeto

A CaçambaRápido é uma empresa fictícia de locação de caçambas estacionárias e retirada de entulho na Rio de Janeiro — RJ. Este projeto foi construído como um case completo de desenvolvimento web moderno, cobrindo desde a arquitetura técnica até a copy de vendas e a infraestrutura de deploy.

---

## Tecnologias

| Camada | Tecnologia |
|--------|------------|
| Framework | [Astro](https://astro.build/) 4.16 |
| Estilização | [Tailwind CSS](https://tailwindcss.com/) 3.4 + `@tailwindcss/typography` |
| Deploy | [Vercel](https://vercel.com/) (adaptador serverless) |
| Linguagem | TypeScript |
| Markdown | Content Collections com schemas Zod |
| SEO | Schema.org JSON-LD, Open Graph, Twitter Cards, Sitemap XML, Robots.txt |

---

## Arquitetura

- **13 páginas** geradas estaticamente (SSG) via Content Collections
- **SEO Técnico completo**: Canonical URLs, meta tags dinâmicas, prefetch de recursos
- **SEO Local (Google Maps)**: Schema.org `LocalBusiness`, `GeoCoordinates`, `OpeningHoursSpecification`, `AggregateRating` e `OfferCatalog`
- **NAP consistente** (Nome, Endereço, Telefone) em todas as páginas
- **Acessibilidade (WCAG)**: focus rings, aria-labels, autocomplete, inputmode, contraste validado
- **Formulário de contato** com honeypot anti-spam e integração Netlify Forms
- **Botão flutuante WhatsApp** com pulsação animada e mensagem pré-preenchida dinâmica

---

## Estrutura de Páginas

| Rota | Tipo | Objetivo |
|------|------|----------|
| `/` | Home | Hero, diferenciais, serviços, depoimentos, CTA |
| `/sobre` | Institucional | História, missão/visão/valores, equipe |
| `/servicos` | Listagem | Catálogo dinâmico de caçambas (3m³, 5m³, 7m³) e retirada de entulho |
| `/servicos/[slug]` | Detalhe | Página de produto com especificações, sidebar sticky e CTA de fechamento |
| `/blog` | Listagem | Artigos de autoridade sobre obras e descarte |
| `/blog/[slug]` | Artigo | Conteúdo com sidebar de posts relacionados, CTA e links para serviços |
| `/contato` | Conversão | NAP, formulário, WhatsApp inline e telefone |
| `/privacidade` | Legal | Política de privacidade (`noindex`) |
| `/termos` | Legal | Termos de uso (`noindex`) |
| `/sitemap.xml` | SEO Técnico | Sitemap dinâmico com prioridades e datas |
| `/robots.txt` | SEO Técnico | Diretrizes para crawlers |

---

## Design System

- **Cores**: Primary `#FACC15` (amarelo), Secondary `#1E3A8A` (azul), Accent `#000000` (preto)
- **Tipografia**: Inter (Google Fonts), pesos 400–900
- **Respiro padronizado**: `py-24 md:py-32`, `p-10 md:p-12`, `gap-10 lg:gap-12`
- **Componentes**: Cards com `rounded-2xl`, sombras progressivas, hover com `translate-y`
- **Mobile-first**: breakpoints `sm:`, `md:`, `lg:`

---

## Scripts

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## Status

**Pronto para Produção.**

O repositório está versionado e configurado com o adaptador Vercel. O próximo passo é conectar o projeto a um repositório remoto no GitHub e realizar o deploy via painel da Vercel ou via CLI (`vercel --prod`).

---

## Autor

Projeto desenvolvido como case de estudo de desenvolvimento web focado em performance, SEO Local e conversão.
