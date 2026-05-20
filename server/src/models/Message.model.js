const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    message: { type: String, required: true, trim: true, maxlength: 4000 },
    ip: { type: String },
    userAgent: { type: String },
  },
  { timestamps: true }
);

module.exports = model('Message', messageSchema);
