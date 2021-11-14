const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const ReportCard = require('../model/ReportCard');

// @route   POST api/report-card
// @desc    Add a student
// @access  Public
router.post(
    '/', 
    [
      check('arabic', 'Arabic is required').not().isEmpty(),
      check('uae', 'UAE is required').not().isEmpty(),
      check('english', 'English is required').not().isEmpty(),
      check('mathematics', 'Mathematics is required').not().isEmpty(),
      check('french', 'French is required').not().isEmpty(),
      check('science', 'Science is required').not().isEmpty(),
      check('term', 'TERM is required').not().isEmpty(),
      check('periodic_test', 'Periodic Test is required').not().isEmpty()      
    ],
    async (req, res) => {        
      try {
        console.log('Report Card entered');
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array()});
        }      
        
        const { arabic, uae, english,
          mathematics, french, science, term, periodic_test } = req.body;
        const student = req.body.id;

        const newReportCard = new ReportCard({ arabic, uae, english,
          mathematics, french, science, term, periodic_test, student
        });
      
        const reportCard = await newReportCard.save();
        res.json(reportCard);
        // res.send('report Added');
      } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
      }      
    }
  );

// @route   GET api/report-card 
// @desc    Get report card of a student
// @access  Public
router.get(
    '/:id',
    async (req, res) => {
      try {
        // get report card list by student id and sort it by term
        const reportCards = await ReportCard.find({ student: req.params.id}).sort({date: 1});
        res.json(reportCards);
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
      }
    }
  );

// @route   PUT api/report-card/:id
// @desc    Update Student's Report Card
// @access  Public
router.put(
  '/:id',
  async (req, res) => {
    try {
      console.log('Report Card Update');
      const { arabic, english, mathematics, uae, french, science } = req.body;

      // Build Report Card object
      const reportCardFields = {};
      if(arabic) reportCardFields.arabic = arabic;
      if(english) reportCardFields.english = english;
      if(mathematics) reportCardFields.mathematics = mathematics;
      if(uae) reportCardFields.uae = uae;
      if(science) reportCardFields.science = science;
      if(french) reportCardFields.french = french;

      let reportCard = await ReportCard.findById(req.params.id);

      if(!reportCard) return res.status(404).json({ msg: `Report Card not found` });

      reportCard = await ReportCard.findByIdAndUpdate(req.params.id, {
        $set: reportCardFields });

      res.json(reportCard);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;