import React, { useReducer } from 'react';

// Context & Reducer
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

// Constants
import {
  CREATE_CONTACT,
  CREATE_ALERT,
  UPDATE_CONTACT,
  CLEAR_ALERT,
  SELECT_CONTACT,
  REMOVE_CONTACT,
  CLEAR_SELECTED_CONTACT
} from '../constants';

const ContactState = props => {
  // Initial State
  const initialState = {
    contacts: JSON.parse(localStorage.getItem('contacts')),
    selectcontact: null,
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

  const fnUpdateContact = contact => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    });
  };

  const fnSelectContact = contact => {
    dispatch({
      type: SELECT_CONTACT,
      payload: contact
    });
  };

  const fnClearSelectedContact = () => {
    dispatch({
      type: CLEAR_SELECTED_CONTACT
    });
  };

  const fnRemoveContact = id => {
    dispatch({
      type: REMOVE_CONTACT,
      payload: id
    });
  };

  const fnCreateAlert = (message, category) => {
    dispatch({
      type: CREATE_ALERT,
      payload: {
        message,
        category
      }
    });
  };

  const fnClearAlert = () => {
    dispatch({
      type: CLEAR_ALERT
    });
  };

  return (
    <ContactContext.Provider
      value={{
        // State
        contacts: state.contacts,
        selectcontact: state.selectcontact,
        alert: state.alert,

        // Functions
        fnCreateContact,
        fnUpdateContact,
        fnSelectContact,
        fnClearSelectedContact,
        fnRemoveContact,
        fnCreateAlert,
        fnClearAlert
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
