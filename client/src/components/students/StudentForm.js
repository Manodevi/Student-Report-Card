import React, { useState, useContext } from 'react';
import StudentContext from '../../context/studentReportCard/studentContext';

const StudentForm  = () => {
  const context = useContext(StudentContext);
  const [student, setStudent] = useState({
    name: '',
    std: '',
    section: ''
  });

  const { name, std, section } = student;
  const stdOption = [];
  for(let i = 1; i <=12; i++) {
    stdOption.push(`Class ${i}`);
  }

  const onChange = e => {
    e.preventDefault();
    setStudent({...student, [e.target.name]: e.target.value });    
  };

  const onSubmit = e => {
    e.preventDefault();
    context.addStudent(student);
    setStudent({
      name: '',
      std: '',
      section: ''
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Student</h2>
      <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} />
      <select type="number" placeholder="Class" name="std" value={std} onChange={onChange}>
        <option value="" disbaled selected>Select Class</option>
        {stdOption.map((option, index) => (          
          <option value={index+1}>{option}</option>
        ))}      
      </select>

      <input type="text" placeholder="Section" name="section" value={section} onChange={onChange} />
      <div>
        <input type="Submit" value="Add Student" className="btn btn-primary btn-block" />
      </div>
    </form>
  );
};

export default StudentForm;