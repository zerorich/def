const Project = require('../models/Project.model');

async function listProjects() {
  return Project.find().sort({ featured: -1, order: 1, createdAt: -1 }).lean();
}

module.exports = { listProjects };
