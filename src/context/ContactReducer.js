// Constants
import {
  GET_CONTACTS,
  CREATE_CONTACT,
  CREATE_ALERT,
  CLEAR_ALERT
} from '../constants';

export default (state, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case CREATE_ALERT:
      return {
        ...state,
        alert: {
          message: action.payload.message,
          category: action.payload.category
        }
      };
    case CLEAR_ALERT:
      return {
        ...state,
        alert: null
      };
    default:
      return state;
  }
};
