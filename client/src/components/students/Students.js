import React, { Fragment, useContext } from 'react';
import StudentContext from '../../context/studentReportCard/studentContext';
import StudentItem from './StudentItem';

const Students = () => {
  const context = useContext(StudentContext);

  const { students, filtered } = context;
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(student => (
            <StudentItem key={student.id} student={student} />  
        ))
        : students.map(student => (
          <StudentItem key={student.id} student={student} />
        ))
      }     
    </Fragment>
  );
}

export default Students;