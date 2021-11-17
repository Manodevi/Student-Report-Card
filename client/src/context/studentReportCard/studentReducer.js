import {
    ADD_STUDENT,
    DELETE_STUDENT,
    UPDATE_STUDENT,
    FILTER_STUDENTS,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT
} from '../types' ;

export default (state, action) => {
  switch (action.type) {
    case ADD_STUDENT:      
      return {
        ...state,
        students: [action.payload, ...state.students]
      };
      
    default:
      return state;
  }
}