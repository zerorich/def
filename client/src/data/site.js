export const site = {
  name: 'Сергей',
  role: 'Fullstack Developer',
  tagline: 'Создаю быстрые и надёжные веб-приложения — от UI до API и баз данных.',
  email: 'zerorich207@gmail.com',
  location: 'Remote · UTC+3',
  socials: {
    github: 'https://github.com/zerorich',
    telegram: 'https://t.me/ZERO_rich',
    linkedin: 'https://www.linkedin.com/in/your-handle',
  },
  about: [
    'Я fullstack-разработчик с фокусом на современный JavaScript-стек: React/Next.js на фронте и Node.js (Express, Mongoose) на бэке. Также пишу Telegram-ботов на Aiogram.',
    'Люблю простые решения, понятный код и быстрые итерации. Беру задачи целиком: дизайн → API → деплой.',
  ],
  skills: [
    { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Vite', 'CSS / Tailwind'] },
    { group: 'Backend', items: ['Node.js', 'Express', 'Mongoose', 'REST', 'WebSockets', 'Python', 'FastAPI'] },
    { group: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Redis'] },
    { group: 'Other', items: ['Docker', 'Git', 'Linux'] },
  ],
  fallbackProjects: [
    {
      _id: 'local-1',
      title: 'Portfolio website',
      description: 'Этот сайт. Vite + React на фронте, Express + MongoDB на бэке. Тёмная/светлая темы.',
      stack: ['React', 'Vite', 'Express', 'MongoDB'],
      repoUrl: '',
      liveUrl: '',
      featured: true,
    },
  ],
};
