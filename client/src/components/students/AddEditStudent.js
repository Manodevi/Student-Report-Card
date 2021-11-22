import Students from '../students/Students';
import StudentFilter from '../students/StudentFilter';
import StudentForm from './StudentForm';
import { useParams} from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import StudentContext from '../../context/studentReportCard/studentContext';

const AddEditStudent = props => {
  const context = useContext(StudentContext);
  const { students, setStudent, clearStudent } = context;
  const { id } = useParams();
  
  useEffect(() => {
    if(students !== null) {
      const matchedStudent = students.filter(student => {
        return student._id === id;
      });

      setStudent(matchedStudent[0]);
    }
    return () => {      
      clearStudent();
    };
    // eslint-disable-next-line
  }, [id]);

  
  return (
    <div className="grid-2">
      <div>
        <StudentForm />
      </div>
      <div>
        <StudentFilter />
        <Students />
      </div>
    </div>
  );
};

export default AddEditStudent;