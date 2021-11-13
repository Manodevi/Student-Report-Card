const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Student = require('../model/Student');

// @route   POST api/students 
// @desc    Add a student
// @access  Public
router.post(
    '/', 
    [
      check('name', 'Name is required').not().isEmpty(),
      check('class', 'Class is required').not().isEmpty(),
      check('section', 'Section is required').not().isEmpty(),
    ],
    (req, res) => {  
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
      }
      res.send('Added');
    }
  );

module.exports = router;