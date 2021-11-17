import React, { useContext, useRef, useEffect } from 'react';
import StudentContext from '../../context/studentReportCard/studentContext';

const StudentFilter = () => {
  const context = useContext(StudentContext);
  const text = useRef('');

  const {filterStudents, clearFilter, filtered} = context;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterStudents(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input type="text" ref={text} placeholder="Filter Students..."
        onChange={onChange} />
    </form>
  );
};

export default StudentFilter;