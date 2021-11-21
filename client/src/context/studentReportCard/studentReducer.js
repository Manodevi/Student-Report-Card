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

export default (state, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload
      };

    case ADD_STUDENT:      
      return {
        ...state,
        students: [action.payload, ...state.students]
      };

    case UPDATE_STUDENT:      
      return {
        ...state,
        students: state.students.map(student=> {
          if(student._id === action.payload._id) {
            return action.payload;
          } else {
            return student;
          }
        })
      };
      
    case DELETE_STUDENT:      
      return {
        ...state,
        students: state.students.filter(student => {
          return student._id !== action.payload
        })
      };
      
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };

    case FILTER_STUDENTS:
      return {
        ...state,
        filtered: state.students.filter(student => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return student.name.match(regex);
        })      
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };

    case STUDENT_ERROR:
      return {
        ...state,
        error: action.payload.map(err => err.msg)
      };

    case SET_REPORTCARD:
      return {
        ...state,
        reportcard: action.payload
      }

    case UPDATE_REPORTCARD:      
      const updatedReportCard = state.reportcard.map(report => {
        if(report._id === action.payload._id) {          
          return action.payload;
        } else {
          return report;
        }
      });
      
      return {
        ...state,
        reportcard: updatedReportCard
      }

    case CLEAR_REPORTCARD:
      return {
        ...state,
        reportcard: null
      };

    default:
      return state;
  }
}