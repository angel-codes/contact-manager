// Constants
import { GET_CONTACTS, CREATE_CONTACT } from '../constants';

export default (state, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    default:
      return state;
  }
};
