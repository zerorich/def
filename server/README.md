# Portfolio — Server

Node.js + Express 5 + MongoDB (Mongoose). CommonJS, структура `routes → controllers → services → models`.

## Скрипты

```bash
npm run dev     # nodemon, http://localhost:4000
npm start       # production
npm run seed    # заполнить БД примерами проектов
```

## ENV

Скопировать `.env.example` → `.env` и задать `MONGODB_URI`. Дефолт — `mongodb://127.0.0.1:27017/portfolio`.

| Переменная     | По умолчанию                              |
| -------------- | ----------------------------------------- |
| `PORT`         | `4000`                                    |
| `NODE_ENV`     | `development`                             |
| `CORS_ORIGIN`  | `http://localhost:5173` (можно через `,`) |
| `MONGODB_URI`  | `mongodb://127.0.0.1:27017/portfolio`     |

## API

Все ответы заворачиваются в `{ data: ... }` или `{ error: { message, details? } }`.

| Метод | Путь            | Описание                              |
| ----- | --------------- | ------------------------------------- |
| GET   | `/api/health`   | Health-check                          |
| GET   | `/api/projects` | Список проектов (sorted by featured)  |
| POST  | `/api/messages` | Сообщение из контактной формы         |

### `POST /api/messages` — payload

```json
{ "name": "string (2-120)", "email": "valid email", "message": "string (10-4000)" }
```

## Структура

```
src/
  app.js              # express-приложение (middleware, routes, error-handler)
  index.js            # bootstrap (connect + listen)
  config/
    env.js            # парсинг .env
    db.js             # mongoose.connect
  routes/             # роутеры (только маршруты)
  controllers/        # парсинг req, вызов сервисов, форма ответа
  services/           # бизнес-логика (работа с моделями)
  models/             # Mongoose-схемы
  middleware/         # error-handler, validate (express-validator)
  utils/              # asyncHandler, ApiError
  scripts/seed.js     # сидер
```
