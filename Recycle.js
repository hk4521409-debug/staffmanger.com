const mongoose = require('mongoose');

const recycleBinSchema = mongoose.Schema({
  originalId: { type: mongoose.Schema.Types.ObjectId, required: true },
  collectionName: { type: String, required: true },
  data: { type: Object, required: true },
  deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  deletedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RecycleBin', recycleBinSchema);
