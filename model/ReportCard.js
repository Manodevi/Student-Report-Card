const mongoose = require('mongoose');

const ReportCardSchema = mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'students'
  },
  term: {
    type: Number,
    required: true
  },
  periodic_test: {
    type: String,
    required: true
  },
  arabic: {
    type: String,
    required: true,
  },
  uae: {
    type: String,
    required: true
  },
  english: {
    type: String,
    required: true    
  },
  mathematics: {
    type: String,
    required: true
  },
  science: {
    type: String,
    required: true
  },
  french: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('report_card', ReportCardSchema);