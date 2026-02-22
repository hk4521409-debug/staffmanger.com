const mongoose = require('mongoose');

const materialSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fileUrl: { type: String, required: true },
  fileType: { type: String, enum: ['pdf', 'doc', 'ppt', 'other'] }
}, { timestamps: true });

module.exports = mongoose.model('Material', materialSchema);
