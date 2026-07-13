# Contabilize

Dashboard de controle financeiro pessoal construído em React. Permite registrar receitas e despesas, visualizar o saldo em tempo real e entender pra onde o dinheiro está indo através de um gráfico por categoria.

Projeto autoral criado como prática de React (Context API, hooks customizados, componentização) e como ferramenta real de uso pessoal.

## Para que serve

- Registrar entradas (receitas) e saídas (despesas) do dia a dia
- Acompanhar o saldo atual sem precisar abrir planilha
- Visualizar em quais categorias o dinheiro está sendo mais gasto (moradia, alimentação, transporte, etc.)
- Manter um histórico simples de transações, com opção de remover lançamentos
- Servir de base pra estudar/entender conceitos de gestão financeira pessoal na prática, unindo lógica de programação com lógica financeira

## Tecnologias utilizadas

- **React 18** — biblioteca principal, componentização e hooks
- **Vite** — build tool e servidor de desenvolvimento
- **Tailwind CSS** — estilização utilitária, tema escuro
- **Recharts** — gráfico de gastos por categoria
- **Context API** — gerenciamento de estado global das transações
- **localStorage** — persistência dos dados no navegador (MVP, sem backend)

## Versões disponíveis

### v0.1.0 — MVP inicial (atual)
- Cadastro de transações (receita/despesa) com descrição, valor, categoria e data
- Lista de transações com opção de remoção
- Resumo com saldo, total de receitas e total de despesas
- Gráfico de gastos por categoria (pizza)
- Persistência local via localStorage
- Tema escuro

> Próximas versões (filtros por mês/categoria, metas de economia, exportação CSV, integração com Supabase) estão no roadmap do projeto.

## Como rodar

```bash
npm install
npm run dev
```

## Autor

**Ewerson Benigno**
GitHub: [@ewbenigno](https://github.com/ewbenigno)
