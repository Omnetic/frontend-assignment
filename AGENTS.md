# AGENTS.md

Guide for AI coding agents working in this repository.

## Project

Hiring entry task: candidates build a full-stack todo app ("Zentask"). This repo ships a frontend scaffold (React 19 + Vite + TypeScript, Jest installed) and a clickable prototype with mocked data. There is no backend: the candidate builds it (PHP strongly advised, Node/TypeScript acceptable). It must start with `docker compose up`, use cookie-based auth, and ship an OpenAPI schema. The candidate then builds the frontend against their own API, matching the prototype.

## Structure

- `src/` - React + TypeScript frontend source
- `src/theme/tokens.ts` - design tokens (colors, typography)
- `prototype/index.html` - clickable prototype with mocked data; the target UI
- `README.md` - the assignment brief and submission checklist

## Commands

- `npm start` - run the dev server (Vite)
- `npm test` - run unit tests (Jest)
- `npm run eslint` - lint (auto-fixes)
- `npm run prettify` - format with Prettier (writes files)
- `npm run typecheck` - TypeScript check, no emit

Code must pass eslint, prettier and typecheck:
`npm run eslint && npm run prettify && npm run typecheck`

## Links

- [README.md](./README.md)
- [prototype/index.html](./prototype/index.html)

## Before you start

- Read README.md
- Read prototype/index.html
