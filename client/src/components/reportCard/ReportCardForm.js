import React, { Fragment, useState, useRef, useContext, useEffect } from 'react';
import StudentContext from '../../context/studentReportCard/studentContext';
import PeriodicTest from './PeriodicTest';

const subKeys = ['arabic', 'uae', 'english', 'mathematics', 'science', 'french'];
const initialReport = {
  arabic: '',
  uae: '',
  english: '',
  mathematics: '',
  science: '',
  french: ''
};
const subjects = {
  arabic: 'Arabic',
  uae: 'UAE Social Studies',
  english: 'English',
  mathematics: 'Mathematics',
  science: 'Science',
  french: 'French'
};

const ReportCardForm = props => {
  const [ reportValues, setReportValues ] = useState(
    {
      pt1: initialReport,
      pt2: initialReport,
      pt3: initialReport,
      pt4: initialReport
    }
  );

  const context = useContext(StudentContext);
  const { reportcard, updateReportCard } = context;

  useEffect(() => {
    if (reportcard) {
      const periodicTest = reportcard.reduce((previousReport, report) => {        
        
        return {
          ...previousReport, 
          [`pt${report.periodic_test}`]: report
          };
      }, {});
      
      setReportValues({
        ...reportValues,
        ...periodicTest
      });      
    }
  }, [reportcard]);

  const onUpdate = (updatedValues) => {    
    updateReportCard(updatedValues._id, {
          arabic: updatedValues.arabic,
          uae: updatedValues.uae,
          english: updatedValues.english,
          mathematics: updatedValues.mathematics,
          science: updatedValues.science,
          french: updatedValues.french
        }
    );
  };

  return (
    <Fragment>
      <div style={{}}>
        <div>Subjects</div>
        <div>
          {subKeys.map(subject => <div>{subjects[subject]}</div>)}
        </div>
      </div>
      <div>
        Term1
        <PeriodicTest subjects={subKeys} onUpdate={onUpdate} test="pt1" reportValues={reportValues.pt1} />
        <PeriodicTest subjects={subKeys} onUpdate={onUpdate} test="pt2" reportValues={reportValues.pt2} />
        <PeriodicTest subjects={subKeys} onUpdate={onUpdate} test="pt3" reportValues={reportValues.pt3} />
        <PeriodicTest subjects={subKeys} onUpdate={onUpdate} test="pt4" reportValues={reportValues.pt4} />
      </div>
    </Fragment>
  );
};

export default ReportCardForm;