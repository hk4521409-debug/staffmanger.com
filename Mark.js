const mongoose = require('mongoose');

const markSchema = mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  examType: { type: String, enum: ['internal1', 'internal2', 'final'], required: true },
  marksObtained: { type: Number, required: true },
  maxMarks: { type: Number, default: 100 }
}, { timestamps: true });

module.exports = mongoose.model('Mark', markSchema);
