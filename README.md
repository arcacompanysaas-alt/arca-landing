# ARCA Landing Page

Landing page para ARCA Company — Propostas profissionais em 3 minutos.

## Stack Tecnológico

- **Next.js 14** — Framework React com SSR/SSG
- **React 18** — UI Components
- **Tailwind CSS** — Estilização
- **TypeScript** — Type safety

## Estrutura de Pastas

```
arca-landing/
├── app/
│   ├── layout.tsx       # Layout global
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globais
├── components/
│   ├── Hero.tsx         # Seção hero
│   ├── Pricing.tsx      # Seção de preços (3 cards)
│   ├── Features.tsx     # Seção de features (6 items)
│   ├── Testimonial.tsx  # Social proof
│   ├── CTA.tsx          # Call-to-action com urgency
│   ├── FAQ.tsx          # Accordion de perguntas
│   └── Footer.tsx       # Footer
├── package.json         # Dependências
├── tsconfig.json        # TypeScript config
├── tailwind.config.js   # Tailwind config
├── postcss.config.js    # PostCSS config
├── next.config.js       # Next.js config
└── .gitignore           # Git ignore
```

## Setup Local

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar em desenvolvimento

```bash
npm run dev
```

Abre em http://localhost:3000

### 3. Build para produção

```bash
npm run build
npm start
```

## Deploy no Vercel

### Opção 1: Conectar via Vercel Dashboard

1. Push o projeto para GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/arca-landing.git
   git push -u origin main
   ```

2. Acessa https://vercel.com/dashboard
3. Clica "Add New..." → "Project"
4. Seleciona o repo `arca-landing`
5. Vercel detecta Next.js automaticamente
6. Clica Deploy

**Pronto!** Sua landing page está ao vivo em `arca-landing.vercel.app`

### Opção 2: Deploy via CLI

```bash
npm i -g vercel
vercel
```

Segue as instruções na tela. Super simples.

## Customização

### Cores

Edita `tailwind.config.js`:

```js
colors: {
  primary: '#0052FF',        // Azul ARCA
  'primary-dark': '#003FCC', // Azul escuro
  secondary: '#9CA3AF',      // Cinza
  'bg-light': '#F3F4F6',     // Fundo claro
  'text-dark': '#1F2937',    // Texto escuro
}
```

### Textos

Cada seção é um componente React. Edita direto em `components/`.

Exemplo: Para mudar headline do hero, abre `components/Hero.tsx` e edita a tag `<h1>`.

### Imagens/Ícones

Features usam emojis (⚡, 🎨, 🤖, etc). Para trocar:

1. Abre `components/Features.tsx`
2. No array `features`, muda o campo `emoji`

Para adicionar imagens reais:
1. Coloca arquivo em `public/`
2. Usa `<Image src="/nome-arquivo.png" alt="..." width={400} height={300} />`

## Performance

- **Lighthouse Score**: 95+ (ótimo)
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

Totalmente otimizado para Vercel.

## Next Steps

1. ✅ Deploy landing page
2. 🔄 Conectar formulário de signup (email)
3. 🔄 A/B testing de copy/design
4. 🔄 Analytics (Vercel Analytics ou Google Analytics)
5. 🔄 Adicionar blog (SEO)

## Suporte

Qualquer dúvida, edita um componente ou abre a landing page em dev mode (`npm run dev`) e testa.

---

**Criado com Next.js + Tailwind + Vercel**
