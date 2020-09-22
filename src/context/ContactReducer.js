// Constants
import {
  CREATE_CONTACT,
  CREATE_ALERT,
  UPDATE_CONTACT,
  CLEAR_ALERT,
  REMOVE_CONTACT,
  SELECT_CONTACT,
  CLEAR_SELECTED_CONTACT
} from '../constants';

export default (state, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      localStorage.setItem(
        'contacts',
        JSON.stringify([...state.contacts, action.payload])
      );
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case UPDATE_CONTACT:
      localStorage.setItem(
        'contact',
        JSON.stringify(
          state.contacts.map(contact =>
            contact.id === action.payload.id ? action.payload : contact
          )
        )
      );
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selectcontact: action.payload
      };
    case CLEAR_SELECTED_CONTACT:
      return {
        ...state,
        selectcontact: null
      };
    case REMOVE_CONTACT:
      localStorage.setItem(
        'contacts',
        JSON.stringify(
          state.contacts.filter(contact => contact.id !== action.payload)
        )
      );
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
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
