> [!NOTE] Quick Overview
> **The repository**
> A React scaffold built on Vite with TypeScript. There is no backend
> prepared — that's up to you.
>
> **The app**<br>
> This is what you will build: open `prototype/index.html` in your browser — a
> clickable preview with mocked data, handed over the same way our product team
> hands work to us.
>
> **Use of AI**
> We advise you to use AI tools (Claude, Copilot, Cursor, …) — we do, daily.
> But submit only code you own: in the interview you will extend this exact
> project live.

![Zentask](./src/assets/readme/banner.png)

## Backend

Build your own REST API. From scratch.

- **PHP is strongly advised** — it is our stack (Symfony welcome). If you
  really don't work with PHP, Node/TypeScript is acceptable.
- **Auth is cookie-based**: register, login, logout. No tokens in
  `localStorage`, CSRF protection is a bonus.
- **Todos belong to users**: full CRUD + complete/incomplete, and a user can
  only ever see or touch their own todos.
- **Each todo gets a Jira-like key** (e.g. `ZEN00001`): prefix and digit count
  are set in backend config. Keys are per user, sequential, unique and never
  reused. Generate them in application code: no DB auto-increment, sequences,
  triggers or stored procedures.
- **OpenAPI schema is a required deliverable**: document your API
  and tell us in the README where to find it.
- **Persistence is your choice** — pick something you can defend.
- **`docker compose up` must start your backend (and database)**. If we can't
  run it in 5 minutes, we can't review it.

## Frontend

Build it against your own API, matching the prototype in `prototype/index.html`.

1. Login and register pages
2. A todo list with all todos of the logged-in user
3. Each todo has a quick actions button revealing delete and complete
4. Clicking a todo opens the todo detail page
5. The detail shows the todo in full length, with edit, delete, and
   mark-as-completed actions

#### Technical requirements

- **Stateful fetching**: loading, error, and success states are handled.
- **Error handling**: failed requests surface to the user.
- **Component system**: basic building blocks (Button, Checkbox, Card…).
- **A tested utility function**: at least one utility covered with Jest.

#### Tooling

- Design tokens (colors, typography) live in `src/theme/tokens.ts` — wire them into any styling solution you like
- For unit testing, [Jest](https://jestjs.io/) is already installed
- Use our prettier, eslint, and typescript config for static testing
  `npm run lint`, `npm run format:check`, `npm run typecheck`

## Before you submit

Make sure every box ticks — on a clean machine, not just yours:

- [ ] `docker compose up` starts your backend — PHP or Node — together with its database
- [ ] `npm install`, then `npm start` runs the frontend (on `http://localhost:5173`) against it
- [ ] All tests pass: `npm test`
- [ ] Lint, formatting and types are clean: `npm run lint && npm run format:check && npm run typecheck`
- [ ] Your README explains the setup and where the OpenAPI schema lives

Feel free to update the README with any notes, feedback or comments.

**That's it! Good luck!**
