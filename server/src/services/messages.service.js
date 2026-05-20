const Message = require('../models/Message.model');

async function createMessage(data) {
  return Message.create(data);
}

module.exports = { createMessage };
