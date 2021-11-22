import Students from '../students/Students';
import StudentFilter from '../students/StudentFilter';
import ReportCardForm from './ReportCardForm';
import { useParams} from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import StudentContext from '../../context/studentReportCard/studentContext';

const ReportCard = props => {
  const context = useContext(StudentContext);
  const { setReportCard, setStudent, clearStudent, clearReportCard } = context;
  const { id } = useParams();

  useEffect(() => {    
    setStudent(id);
    setReportCard(id);
    return () => {      
      clearStudent();
      clearReportCard();
    };
  }, [id]);

  
  return (
    <div className="grid-2">
      <div>
        { <ReportCardForm /> }
      </div>
      <div>
        <StudentFilter />
        <Students />
      </div>
    </div>
  );
};

export default ReportCard;