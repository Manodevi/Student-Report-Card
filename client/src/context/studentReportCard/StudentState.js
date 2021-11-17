import React, { useReducer } from 'react';
import {v4 as uuid} from 'uuid';
import studentContext from "./studentContext";
import studentReducer from './studentReducer';
import {
    ADD_STUDENT,
    DELETE_STUDENT,
    UPDATE_STUDENT,
    FILTER_STUDENTS,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT
} from '../types' ;

const StudentState = props => {
  const initialState = {
    students: [
      {
        id: 2,
        name: 'Vaishu',
        std: '1',
        section: 'B'
      },
      {
        id: 4,
        name: 'DDDDD',
        std: '5',
        section: 'D'
      },
      {
        id: 8,
        name: 'XXXXZZZZ',
        std: '10',
        section: 'A'
      }
    ]
  };

  const [ state, dispatch ] = useReducer(studentReducer, initialState);

  // Add Student
  const addStudent = student => {
    student.id = uuid();    
    dispatch({type: ADD_STUDENT, payload: student});
  };
/*
  // Delete Student
  const deleteStudent = () => {
    dispatch(DELETE_STUDENT);
  };

  // Set Current Student
  const currentStudent = () => {
    dispatch(ADD_STUDENT);
  };
  // Add 
  const addStudent = () => {
    dispatch(ADD_STUDENT);
  };
  // Add Student
  const addStudent = () => {
    dispatch(ADD_STUDENT);
  };
  // Add Student
  const addStudent = () => {
    dispatch(ADD_STUDENT);
  };
  */

  return (
    <studentContext.Provider value={{
      students: state.students,
      addStudent
    }}>
      {props.children}
    </studentContext.Provider>
  );
};

export default StudentState;