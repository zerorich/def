# Portfolio

Личный сайт-портфолио. Monorepo из двух частей:

- **`client/`** — Vite + React 19 (plain CSS, тёмная/светлая темы)
- **`server/`** — Node.js + Express 5 + MongoDB (Mongoose)

## Быстрый старт

```bash
# 1. Backend
cd server
cp .env.example .env          # при необходимости поправить MONGODB_URI
npm install
npm run seed                  # наполнить БД примерами проектов
npm run dev                   # http://localhost:4000

# 2. Frontend (в отдельном терминале)
cd client
cp .env.example .env          # VITE_API_URL=http://localhost:4000/api
npm install
npm run dev                   # http://localhost:5173
```

Если бэкенд не запущен, фронт всё равно работает — секция Projects покажет небольшой запасной список из `client/src/data/site.js`.

## Что внутри

- Hero, About, Skills, Projects, Contact, Footer + sticky Navbar с переключателем темы
- Запрос проектов с бэкенда (`GET /api/projects`)
- Контактная форма (`POST /api/messages`) с валидацией на клиенте и сервере (`express-validator`)
- Express + Helmet + CORS + Morgan, единый error-handler и `asyncHandler`-обёртка
- Скрипт `npm run seed` для наполнения БД примерами

## Дальше

Точки, куда стоит зайти руками:

1. `client/src/data/site.js` — имя, роль, текст «обо мне», скиллы, соц-сети
2. `client/index.html` — `<title>` и meta-description
3. `client/public/favicon.svg` — фавикон (сейчас стартовый из Vite)
4. После запуска `npm run seed` — отредактировать проекты прямо в MongoDB
