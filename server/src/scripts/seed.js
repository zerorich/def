const mongoose = require('mongoose');
const env = require('../config/env');
const { connectDB } = require('../config/db');
const Project = require('../models/Project.model');

const seedProjects = [
  {
    title: 'Sanoat Portali',
    description:
      'Портал для получения массовой информации о регионах Узбекистана. Multi-backend архитектура: Node.js (Express) для API, Python — для обработки данных. SQL для хранения.',
    stack: ['React', 'Node.js', 'Express', 'Python', 'SQL'],
    repoUrl: '',
    liveUrl: 'https://sanoat-frontend-production.up.railway.app/',
    imageUrl: '/uploads/img/sanoat-portali.png',
    featured: true,
    order: 1,
  },
  {
    title: 'Quiz App',
    description:
      'Веб-приложение для проведения тестов во внутриобразовательных целях для сотрудников.',
    stack: ['React'],
    repoUrl: 'https://github.com/zerorich/quiz',
    liveUrl: 'https://ample-analysis-production.up.railway.app',
    imageUrl: '/uploads/img/quiz.png',
    featured: true,
    order: 2,
  },
];

async function run() {
  try {
    await connectDB();
   
    console.log('[seed] Clearing projects...');
    await Project.deleteMany({});
   
    console.log(`[seed] Inserting ${seedProjects.length} projects...`);
    await Project.insertMany(seedProjects);
   
    console.log('[seed] Done.');
  } catch (err) {
    console.error('[seed] Failed:', err);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

// eslint-disable-next-line no-unused-vars
void env;
run();
