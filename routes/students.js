const express = require('express');
const router = express.Router();

// @route   POST api/students 
// @desc    Add a student
// @access  Public
router.post('/', (req, res) => {  
  res.send('Add a Student');
});

module.exports = router;