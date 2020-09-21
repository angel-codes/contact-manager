import React, { useReducer } from 'react';

// Context & Reducer
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

// Constants
import { GET_CONTACTS } from '../constants';

const ContactState = props => {
  // Initial State
  const initialState = {
    contacts: [],
    contact: null,
    alert: null
  };

  // Dispatch for actions
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        contact: state.contact,
        alert: state.alert
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
