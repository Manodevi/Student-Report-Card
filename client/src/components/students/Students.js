import React, { Fragment, useContext, useEffect } from 'react';
import StudentContext from '../../context/studentReportCard/studentContext';
import StudentItem from './StudentItem';

const Students = () => {
  const context = useContext(StudentContext);
  const { students, filtered, getStudents } = context;

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line
  }, []);

  /*
  if (!students) {
    return <h4>Please Add A Student </h4>;
  }
  */ 
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(student => (
            <StudentItem key={student._id} student={student} />  
        ))
        : students !== null && students.map(student => (
          <StudentItem key={student._id} student={student} />
        ))
      }     
    </Fragment>
  );
}

export default Students;