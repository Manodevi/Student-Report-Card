const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  std: {
    type: Number,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('student', StudentSchema);