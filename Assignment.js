const mongoose = require('mongoose');

const assignmentSchema = mongoose.Schema({
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  academicYear: { type: String, required: true },
  semester: { type: String },
  workload: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Assignment', assignmentSchema);
