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
    STUDENT_ERROR,
    SET_REPORTCARD,    
    UPDATE_REPORTCARD,
    CLEAR_REPORTCARD
} from '../types' ;

const StudentState = props => {
  const initialState = {
    students: null,
    current: null,
    filtered: null,
    error: null,
    reportcard: null
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
  const updateStudent = async (student) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(`/api/students/${student._id}`, student, config);            
      dispatch({type: UPDATE_STUDENT, payload: res.data});
    } catch (error) {
      console.log(error.response.data);
      dispatch({type: STUDENT_ERROR, payload: error.response.data.errors});
    }
  };

  // Delete Student
  const deleteStudent = async (student) => {
    const res = await axios.delete(`/api/students/${student}`);
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

  // Set Report Card of a student
  const setReportCard = async (student) => {
    try {
      const res = await axios.get(`/api/report-card/${student}`);
      dispatch({type: SET_REPORTCARD, payload: res.data});
    } catch (error) {      
      dispatch({type: STUDENT_ERROR, payload: error.response.data.errors});
    }  
  };

  // Add new report Card of a student
  const addReportCard = async (reportCardValues) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };    

    reportCardValues.id = state.current;
    try {
      const res = await axios.post('/api/report-card', reportCardValues, config);      
      
      setReportCard(state.current);
    } catch (error) {
      dispatch({type: STUDENT_ERROR, payload: error.response.data.errors});
    }

  };

  // Update Report Card of a student
  const updateReportCard = async (report_id, updatedValues) => {
    console.log(report_id, updatedValues);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };  
            
      const res = await axios.put(`/api/report-card/${report_id}`, updatedValues, config);
      dispatch({type: UPDATE_REPORTCARD, payload: res.data});
    } catch (error) {
      console.log(error.response.data);
      dispatch({type: STUDENT_ERROR, payload: error.response.data.errors});
    } 
  };

  // Clear Report Card
  const clearReportCard = () => {
    dispatch({type: CLEAR_REPORTCARD});
  };

  return (
    <studentContext.Provider value={{
      students: state.students,
      currentStudent: state.current,
      filtered: state.filtered,
      error: state.error,
      reportcard: state.reportcard,
      getStudents,
      addStudent,
      updateStudent,
      deleteStudent,
      setStudent,
      clearStudent,
      filterStudents,
      clearFilter,
      setReportCard,      
      updateReportCard,
      clearReportCard
    }}>
      {props.children}
    </studentContext.Provider>
  );
};

export default StudentState;