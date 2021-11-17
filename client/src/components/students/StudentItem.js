import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import StudentContext from '../../context/studentReportCard/studentContext';

const StudentItem = ({student}) => {
  const context = useContext(StudentContext);
  const { id, name, std, section } = student;

  const onDelete = e => {
    e.preventDefault();
    context.deleteStudent(id);
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}<span className={'badge badge-primary'}>{std}{section.toUpperCase()}</span>
      </h3>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button onClick={onDelete} className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

StudentItem.propTypes = {
  student: PropTypes.object.isRequired
};

export default StudentItem;