import React, { useReducer } from 'react';

// Context & Reducer
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

// Constants
import { GET_CONTACTS, CREATE_CONTACT } from '../constants';

const ContactState = props => {
  // Initial State
  const initialState = {
    contacts: [],
    contact: null,
    alert: null
  };

  // Dispatch for actions
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const fnCreateContact = contact => {
    dispatch({
      type: CREATE_CONTACT,
      payload: contact
    });
  };

  return (
    <ContactContext.Provider
      value={{
        // State
        contacts: state.contacts,
        contact: state.contact,
        alert: state.alert,

        // Functions
        fnCreateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
