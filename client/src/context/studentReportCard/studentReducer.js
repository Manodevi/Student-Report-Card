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

export default (state, action) => {
  switch (action.type) {
    case ADD_STUDENT:      
      return {
        ...state,
        students: [action.payload, ...state.students]
      };

    case UPDATE_STUDENT:      
      return {
        ...state,
        students: state.students.map(student=> {
          if(student.id === action.payload.id) {
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
          return student.id != action.payload
        })
      }
      
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    default:
      return state;
  }
}