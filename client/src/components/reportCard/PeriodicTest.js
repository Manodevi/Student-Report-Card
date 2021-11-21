import React, { Fragment, useState, useRef, useContext, useEffect } from 'react';
import StudentContext from '../../context/studentReportCard/studentContext';

const grades = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2', 'E1', 'E2'];

const PeriodicTest = ({subjects, test, reportValues, onUpdate}) => {  
  const [ testReport, setTestReport ] = useState(reportValues);
  
  useEffect(() => {
    setTestReport(reportValues);    
  }, [reportValues]);

  const onChange = e => {
    e.preventDefault();
    setTestReport({...testReport, [e.target.name]: e.target.value});
  };

  const onSubmit = e => {
    e.preventDefault();
    onUpdate(testReport);
  };

  return (
    <div>
      <div>{test}</div>
      <form name={test} onSubmit={onSubmit}>
        <div>
          {subjects.map(subject => (
              <select name={subject} onChange={onChange} value={testReport[subject]}>
                <option value=""></option>
                {grades.map(grade => (
                  <option value={grade} selected={testReport[subject] === grade ? true :false}>
                    {grade}
                  </option>
                  )
                )}
              </select>
              ))
            }
            <input type="submit" value="Update" />
            </div>
      </form>
    </div>
  );
};

export default PeriodicTest;