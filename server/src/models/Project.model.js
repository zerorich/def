const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    stack: { type: [String], default: [] },
    repoUrl: { type: String, trim: true },
    liveUrl: { type: String, trim: true },
    imageUrl: { type: String, trim: true },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

projectSchema.index({ featured: -1, order: 1, createdAt: -1 });

module.exports = model('Project', projectSchema);
