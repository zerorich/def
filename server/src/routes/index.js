const { Router } = require('express');
const projects = require('./projects.routes');
const messages = require('./messages.routes');

const router = Router();

router.get('/health', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));
router.use('/projects', projects);
router.use('/messages', messages);

module.exports = router;
