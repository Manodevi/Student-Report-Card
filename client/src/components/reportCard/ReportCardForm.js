import React, { Fragment, useState, useRef, useContext, useEffect } from 'react';
import StudentContext from '../../context/studentReportCard/studentContext';
import PeriodicTest from './PeriodicTest';

const subKeys = ['arabic', 'uae', 'english', 'mathematics', 'science', 'french'];
const initialReport = {
  _id: '',
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
  const { reportcard, addReportCard, updateReportCard } = context;

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

    return () => {
      setReportValues({
        pt1: initialReport,
        pt2: initialReport,
        pt3: initialReport,
        pt4: initialReport
      });
    };
  }, [reportcard]);

  const onUpdate = (test, updatedValues) => {   
    const updatedReportValues = {
        arabic: updatedValues.arabic,
        uae: updatedValues.uae,
        english: updatedValues.english,
        mathematics: updatedValues.mathematics,
        science: updatedValues.science,
        french: updatedValues.french          
      }; 

    if(updatedValues._id) {
      updateReportCard(updatedValues._id, updatedReportValues);
    } else {
      if ((['pt1', 'pt2']).includes(test)) {
        updatedReportValues.term = 1;
      } else if(['pt3', 'pt4'].includes(test)) {
        updatedReportValues.term = 2;
      }
      updatedReportValues.periodic_test = test.split('pt')[1];
      addReportCard(updatedReportValues);
    }
  };

  return (
    <Fragment>
      <div className="report-card-container">
        <div className="report-card-title">
          <div className="report-card-title-block"><span>Subjects</span></div>
          <div className="report-card-term1">
            <div>Term1</div>
            <div>PT 1</div>
            <div>PT 2</div>
          </div>
          <div className="report-card-term2">
            <div>Term 2</div>
            <div>PT 3</div>
            <div>PT 4</div>
          </div>
        </div>

        <div className="report-card-values">          
          <div>{subKeys.map(subject => <div className="report-card-block report-subject">{subjects[subject]}</div>)}</div>

          <div className="report-card-term1">
            <div className="periodic-test">            
              <PeriodicTest 
                subjects={subKeys} 
                onUpdate={onUpdate} 
                key="pt1" 
                test="pt1" 
                reportValues={reportValues.pt1} 
              />  
            </div>

            <div className="periodic-test">        
              <PeriodicTest 
                subjects={subKeys} 
                onUpdate={onUpdate} 
                key="pt2" 
                test="pt2" 
                reportValues={reportValues.pt2} 
              />  
            </div>
          </div>

          <div className="report-card-term2">
            <div className="periodic-test">        
              <PeriodicTest 
                subjects={subKeys} 
                onUpdate={onUpdate} 
                key="pt3" 
                test="pt3" 
                reportValues={reportValues.pt3} 
              />  
            </div>

            <div className="periodic-test">        
              <PeriodicTest 
                subjects={subKeys} 
                onUpdate={onUpdate} 
                key="pt4" 
                test="pt4" 
                reportValues={reportValues.pt4} 
              />  
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ReportCardForm;