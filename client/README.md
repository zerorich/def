# Portfolio — Client

Vite + React 19. Plain CSS (без Tailwind/TS).

## Скрипты

```bash
npm run dev      # dev-сервер (http://localhost:5173)
npm run build    # production-сборка в dist/
npm run preview  # просмотр прод-сборки
npm run lint     # ESLint
```

## ENV

Скопировать `.env.example` → `.env` и при необходимости поменять `VITE_API_URL` (по умолчанию `http://localhost:4000/api`).

## Структура

```
src/
  api/            # fetch-обёртка над бэкендом
  components/     # секции страницы (Hero, About, Skills, Projects, Contact, Footer) + Navbar
  data/           # статичный контент (имя, скиллы, fallback-проекты)
  hooks/          # useTheme (тёмная/светлая, localStorage)
  index.css       # CSS-переменные обеих тем + базовые стили
  App.jsx
  main.jsx
```

## Темы

Тема хранится в `data-theme` на `<html>` и в `localStorage` под ключом `portfolio:theme`. Старт: пользовательский выбор → системный preference → `dark`.
