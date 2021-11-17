import React, { Fragment, useContext } from 'react';
import StudentContext from '../../context/studentReportCard/studentContext';
import StudentItem from './StudentItem';

const Students = () => {
  const context = useContext(StudentContext);

  const { students } = context;
  return (
    <Fragment>
      {students.map(student => (
        <StudentItem key={student.id} student={student} />
      )
      )}      
    </Fragment>
  );
}

export default Students;