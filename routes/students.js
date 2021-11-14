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
      check('std', 'Class is required').not().isEmpty(),
      check('section', 'Section is required').not().isEmpty(),
    ],
    async (req, res) => {  
      console.log('Student entered');
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
      }      
      
      const { name, std, section } = req.body;

      try {
        let student = new Student({ name, std, section });
        await student.save();

        res.json({ studentId: student.id });
        res.send('Student Added');
      } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
      }      
    }
  );

module.exports = router;