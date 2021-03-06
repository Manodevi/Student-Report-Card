import React, { useState, useEffect } from 'react';

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
    onUpdate(test, testReport);
  };

  return (    
      <form name={test} onSubmit={onSubmit}>
          {subjects.map(subject => (
            <div key={`${test}-div-${subject}`} className="report-card-block">
              <select name={subject}                 
                onChange={onChange} value={testReport[subject]}>
                <option value=""></option>
                {grades.map(grade => (
                  <option key={`${test}-${grade}`} value={grade}>
                    {grade}
                  </option>
                  )
                )}
              </select>
            </div>
            )
          )}            
        <div className="report-card-button">
          <button type="submit" className="btn btn-sm btn-primary">
            {testReport._id ? 'Update' : 'Add'}
          </button>
        </div>
      </form>
    
  );
};

export default PeriodicTest;