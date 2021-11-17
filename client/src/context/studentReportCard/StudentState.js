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
    REMOVE_ALERT,
    SET_CURRENT,
    CLEAR_CURRENT
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
    ],
    current: null
  };

  const [ state, dispatch ] = useReducer(studentReducer, initialState);

  // Add Student
  const addStudent = student => {
    student.id = uuid();    
    dispatch({type: ADD_STUDENT, payload: student});
  };

  // Update Student
  const updateStudent = student => {       
    dispatch({type: UPDATE_STUDENT, payload: student});
  };

  // Delete Student
  const deleteStudent = student => {
    dispatch({type: DELETE_STUDENT, payload: student});
  };

  // Set Current Student
  const setStudent = student => {
    dispatch({type: SET_CURRENT, payload: student});
  };

  // Clear Current Student
  const clearStudent = student => {
    dispatch({type: CLEAR_CURRENT});
  };

  return (
    <studentContext.Provider value={{
      students: state.students,
      currentStudent: state.current,
      addStudent,
      updateStudent,
      deleteStudent,
      setStudent,
      clearStudent
    }}>
      {props.children}
    </studentContext.Provider>
  );
};

export default StudentState;