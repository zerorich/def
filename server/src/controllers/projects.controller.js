const asyncHandler = require('../utils/asyncHandler');
const projectsService = require('../services/projects.service');

const list = asyncHandler(async (req, res) => {
  const projects = await projectsService.listProjects();
  res.json({ data: projects });
});

module.exports = { list };
