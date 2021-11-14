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

        res.json({ id: student.id });
        // res.send('Student Added');
      } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
      }      
    }
  );

// @route   GET api/students
// @desc    Get all students
// @access  Public
router.get(
  '/',
  async (req, res) => {
    try {
      // get all students
      const students = await Student.find({}).sort({name: 1});
      res.json(students);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);


// @route   PUT api/students/:id
// @desc    Update Student
// @access  Public
router.put(
  '/:id',
  async (req, res) => {
    try {
      console.log('Update Student');
      const { name, std, section } = req.body;

      // Build Student object
      const studentFields = {};
      if(name) studentFields.name = name;
      if(std) studentFields.std = std;
      if(section) studentFields.section = section;

      let student = await Student.findById(req.params.id);

      if(!student) return res.status(404).json({ msg: "Student not found" });

      student = await Student.findByIdAndUpdate(req.params.id, {
        $set: studentFields });

      res.json(student);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);


module.exports = router;