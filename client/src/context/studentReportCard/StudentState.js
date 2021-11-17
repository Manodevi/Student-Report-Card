import React, { useReducer } from 'react';
import axios from 'axios';
import studentContext from "./studentContext";
import studentReducer from './studentReducer';
import {
    GET_STUDENTS,
    ADD_STUDENT,
    DELETE_STUDENT,
    UPDATE_STUDENT,
    FILTER_STUDENTS,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT,
    SET_CURRENT,
    CLEAR_CURRENT,
    STUDENT_ERROR    
} from '../types' ;

const StudentState = props => {
  const initialState = {
    students: null,
    current: null,
    filtered: null,
    error: null
  };

  const [ state, dispatch ] = useReducer(studentReducer, initialState);

  // Get Students
  const getStudents = async () => {   
    try {
      const res = await axios.get('/api/students');      
      
      dispatch({type: GET_STUDENTS, payload: res.data});
    } catch (error) {      
      dispatch({type: STUDENT_ERROR, payload: error.response.data.errors});
    }  
  };

  // Add Student
  const addStudent = async (student) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/students', student, config);      
      
      dispatch({type: ADD_STUDENT, payload: res.data});
    } catch (error) {
      dispatch({type: STUDENT_ERROR, payload: error.response.data.errors});
    }

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

  // Filter Students
  const filterStudents = text => {
    dispatch({type: FILTER_STUDENTS, payload: text});
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({type: CLEAR_FILTER});
  };

  return (
    <studentContext.Provider value={{
      students: state.students,
      currentStudent: state.current,
      filtered: state.filtered,
      error: state.error,
      getStudents,
      addStudent,
      updateStudent,
      deleteStudent,
      setStudent,
      clearStudent,
      filterStudents,
      clearFilter
    }}>
      {props.children}
    </studentContext.Provider>
  );
};

export default StudentState;