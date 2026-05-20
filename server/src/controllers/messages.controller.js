const asyncHandler = require('../utils/asyncHandler');
const messagesService = require('../services/messages.service');

const create = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  const saved = await messagesService.createMessage({
    name,
    email,
    message,
    ip: req.ip,
    userAgent: req.get('user-agent'),
  });
  res.status(201).json({
    data: { id: saved._id, createdAt: saved.createdAt },
  });
});

module.exports = { create };
