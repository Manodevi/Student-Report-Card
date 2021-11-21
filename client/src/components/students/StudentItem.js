import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import StudentContext from '../../context/studentReportCard/studentContext';

const StudentItem = ({student}) => {
  const context = useContext(StudentContext);
  const { deleteStudent, setStudent, clearStudent } = context;
  const { _id, name, std, section } = student;

  const onDelete = e => {
    e.preventDefault();
    deleteStudent(_id);   
    clearStudent();
  };

  const onEdit = e => {
    e.preventDefault();
    setStudent(student);
  }

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}<span className={'badge badge-primary'}>{std}{section.toUpperCase()}</span>
      </h3>
      <p>
        <button onClick={onEdit} className="btn btn-dark btn-sm">Edit</button>
        <button onClick={onDelete} className="btn btn-danger btn-sm">Delete</button>
        <Link to={`/students/${_id}/report-card`} style={{float: 'right'}} className="btn btn-secondary btn-sm">
          Report Card
        </Link>
      </p>
    </div>
  );
};

StudentItem.propTypes = {
  student: PropTypes.object.isRequired
};

export default StudentItem;