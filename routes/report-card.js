const express = require('express');
const router = express.Router();

// @route   POST api/report-card 
// @desc    Add a report card
// @access  Public
router.post('/', (req, res) => {  
  res.send('Add a Report Card');
});

module.exports = router;