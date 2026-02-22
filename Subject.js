const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  semester: { type: Number },
  credits: { type: Number },
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  workload: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Subject', subjectSchema);
