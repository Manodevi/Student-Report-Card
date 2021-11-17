import React, { useState, useContext, useEffect } from 'react';
import StudentContext from '../../context/studentReportCard/studentContext';

const StudentForm  = () => {
  const context = useContext(StudentContext);
  const { addStudent, currentStudent, clearStudent, updateStudent } = context;
  const [student, setStudent] = useState({
    name: '',
    std: '',
    section: ''
  });

  useEffect(() => {
    if(currentStudent !== null) {
      setStudent(currentStudent);  
    } else {
      setStudent({
        name: '',
        std: '',
        section: ''
      });
    }
  }, [currentStudent]);
  
  const { name, std, section } = student;
  const stdOption = [];
  for(let i = 1; i <=12; i++) {
    stdOption.push(`Class ${i}`);
  }

  const onChange = e => {
    e.preventDefault();
    setStudent({...student, [e.target.name]: e.target.value });    
  };

  const clearAll = e => {
    e.preventDefault();
    clearStudent();
  };

  const onSubmit = e => {
    e.preventDefault();
    if(currentStudent) {
      updateStudent(student);
      clearStudent();
    } else {
      addStudent(student);
    }    
    setStudent({
      name: '',
      std: '',
      section: ''
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{currentStudent? 'Edit Contact' : 'Add Student'}</h2>
      <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} />
      <select type="number" placeholder="Class" name="std" value={std} onChange={onChange}>
        <option value="" disbaled selected>Select Class</option>
        {stdOption.map((option, index) => (          
          <option value={index+1}>{option}</option>
        ))}      
      </select>

      <input type="text" placeholder="Section" name="section" value={section} onChange={onChange} />
      <div>
        <input type="Submit" value={currentStudent? 'Update Contact' : 'Add Student'} className="btn btn-primary btn-block" />
      </div>
      {currentStudent && 
      <div>
        <button onClick={clearAll} className="btn btn-light btn-block">
            Clear
        </button>
      </div>}
      
    </form>
  );
};

export default StudentForm;