# ARCA Landing - Claude Code Session Guide

## 🏗️ Projeto
**ARCA Landing Page** - Next.js 14 App Router com Framer Motion, next-themes, Tailwind CSS  
Repositório: `arcacompanysaas-alt/arca-landing`

## 📋 Estrutura de Branches (Apenas 2 Branches)

### 1. **`sandbox`** (Ambiente de Testes/Desenvolvimento)
- **Propósito**: Experimentações, implementações, melhorias e testes
- **Quando usar**: Sempre que for fazer mudanças, novas features ou ajustes
- **Deployment**: Vercel preview automático a cada push
- **Merge**: Apenas para `main` quando validado e pronto para produção

### 2. **`main`** (Produção)
- **Propósito**: Versão em produção
- **Quando usar**: **APENAS quando explicitamente pedida** pelo usuário
- **Deployment**: Vercel production (domínio principal)
- **Restrição**: Nunca push direto; apenas merge de `sandbox` quando autorizado
- **Domínio**: `arca-landing-git-main-arca-company-s-projects.vercel.app`

---

## 🚀 Workflow Padrão

1. **Criar feature em `sandbox`**:
   ```bash
   git checkout sandbox
   git pull origin sandbox
   # ... fazer mudanças ...
   git add . && git commit -m "feat: descrição"
   git push origin sandbox
   ```

2. **Validar em preview Vercel**

3. **Quando pronto para produção** (usuário autoriza):
   ```bash
   git checkout main
   git pull origin main
   git merge sandbox
   git push origin main
   ```

---

## 🛠️ Stack Técnico

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4 + custom tokens (brand, ink, paper)
- **Animações**: Framer Motion 11.3.0
- **Dark/Light**: next-themes 0.3.0
- **Fonte**: Plus Jakarta Sans + JetBrains Mono via next/font
- **Build**: `npm run build` antes de cada commit
- **TypeScript**: Enforced

---

## 🎨 Palette & Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `brand` | #0047E0 | CTA, highlights |
| `brand-light` | #4080FF | Secondary highlights |
| `ink` | #060D1A | Dark mode background |
| `ink-soft` | #0A162C | Dark mode surfaces |
| `ink-card` | #121A2A | Dark mode cards |
| `paper` | #FAFCFF | Light mode background |

---

## 📱 Responsive Design

- **Mobile-first approach**
- **Breakpoint**: `md:` (768px)
- **Componentes**: Aplicam `px-4 md:px-12` para padding responsivo
- **Canvas**: Desktop mouse-reactive (350px radius), Mobile autonomous pulse

---

## 🧩 Componentes Principais

| Componente | Propósito |
|-----------|----------|
| `TopHeader` | Navigation + theme toggle + hamburger mobile |
| `HeroSticky` | Hero section com scroll rail (desktop) / Keynote carousel (mobile) |
| `AIToolkit` | 3 tabs (Cotação Aérea, PDF Migration, Prompt Generativo) |
| `FeaturesBenefits` | 3 features com Z-pattern layout |
| `PricingLux` | 3 planos com toggle anual/mensal |
| `FAQAIConsole` | Accordion com AI streaming text effect |
| `FinalCTA` | Seção de encerramento com CTAs |
| `Footer` | Rodapé minimal |

---

## ⚡ Comando Úteis

```bash
# Build verificação
npm run build

# Dev server
npm run dev

# Status git
git status

# Ver commits
git log --oneline -10

# Switch branches
git checkout sandbox    # Para desenvolver
git checkout main       # Apenas para produção
```

---

## 🚫 Regras Importantes

1. ✅ **Sempre fazer `npm run build` antes de commit** para verificar TypeScript/compilation
2. ✅ **Trabalhar sempre em `sandbox`** (nunca diretamente em `main`)
3. ✅ **Merge para `main` apenas com autorização explícita do usuário**
4. ✅ **Mensagens de commit claras** seguindo `feat:`, `fix:`, `refactor:` pattern
5. ❌ **Nunca deletar/recriar branches** sem autorização
6. ❌ **Nunca usar `--force` push** em nenhuma branch
7. ❌ **Nunca fazer alterações diretas em `main`**

---

## 📊 Vercel

- **Equipe**: ARCA COMPANY's projects
- **Projeto**: `arca-landing` (prj_x18ZIU2Yv99354Zu7iyXZeL4bZ6t)
- **Preview**: https://vercel.com/arca-company-s-projects/arca-landing
- **Production Branch**: `main`
- **Preview Branch**: `sandbox`

---

**Last Updated**: 2026-06-09  
**Claude Code Version**: Sonnet 4.6
