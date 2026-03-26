# Políticas de Cancelamento — Módulo MyHotel Backoffice

> Para contexto global do projecto (design tokens, layout, convenções), ver `/Users/andrealeixo/CLAUDE.md`

## Este Módulo
Gestão de políticas de cancelamento para hotéis. Permite criar, editar e gerir regras de cancelamento aplicáveis a reservas.

## Páginas
- **PoliticasCancelamento** — página principal (aguardando specs do Figma)

## Componentes Específicos
- `PoliticasCancelamento.tsx` — componente principal da página (placeholder)

## Estrutura do App (grid CSS, igual ao fecho-vendas)
```tsx
<div className="min-h-screen w-screen grid grid-cols-[255px_1fr] grid-rows-[57px_1fr]">
  <Navbar />    {/* grid-column: 1/-1 */}
  <Sidebar />   {/* grid-row: 2 */}
  <main>...</main>
</div>
```

## GitHub
Repo: `https://github.com/andre-aleixo1904/politicas-cancelamento`
Branch principal: `main`
