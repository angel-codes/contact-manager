import React, { useContext, useEffect, useState } from 'react';
import shortid from 'shortid';

// Context
import ContactContext from '../context/ContactContext';

const Form = () => {
  // Local State
  const [contact, setContact] = useState({
    name: '',
    company: '',
    cellphone: ''
  });

  // Access to the values of the context
  const contactContext = useContext(ContactContext);
  const {
    selectcontact,
    fnCreateContact,
    fnUpdateContact,
    fnClearSelectedContact,
    fnCreateAlert,
    fnClearAlert
  } = contactContext;

  useEffect(() => {
    // Check if the user is trying to update a contact
    if (selectcontact !== null) {
      setContact(selectcontact);
    } else {
      setContact({
        name: '',
        company: '',
        cellphone: ''
      });
    }
  }, [selectcontact]);

  // Save data of the inputs in local state
  const handleChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  // When user submit the form
  const handleSubmit = e => {
    e.preventDefault();

    const { name, company, cellphone } = contact;

    // Validate form
    if (
      name.trim() === '' ||
      company.trim() === '' ||
      cellphone.trim() === ''
    ) {
      fnCreateAlert('All fields are required', 'error');
      setTimeout(() => {
        fnClearAlert();
      }, 2000);
      return; // stop execution of the code
    }

    // Check if the user is trying to create or update
    if (selectcontact !== null) {
      fnUpdateContact(contact);
      fnClearSelectedContact();
    } else {
      // Save in global state
      fnCreateContact({ ...contact, id: shortid.generate() });
    }

    // Restart the form
    setContact({
      name: '',
      company: '',
      cellphone: ''
    });
  };

  return (
    <div className="p-8 bg-white rounded-md">
      <h2 className="text-2xl text-center font-bold">Add a Contact</h2>
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-3 lg:col-span-1">
            <label
              htmlFor="name"
              className="font-bold text-base mb-1 inline-block"
            >
              Name
            </label>
            <input
              id="name"
              value={contact.name}
              onChange={handleChange}
              className="appearance-none w-full block px-4 py-2 border-2 rounded-md shadow-md focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Contact name"
            />
          </div>
          <div className="col-span-3 lg:col-span-1">
            <label
              htmlFor="company"
              className="font-bold text-base mb-1 inline-block"
            >
              Company
            </label>
            <input
              id="company"
              value={contact.company}
              onChange={handleChange}
              className="appearance-none w-full block px-4 py-2 border-2 rounded-md shadow-md focus:outline-none focus:shadow-outline"
              name="company"
              type="text"
              placeholder="Contact company"
            />
          </div>
          <div className="col-span-3 lg:col-span-1">
            <label
              htmlFor="cellphone"
              className="font-bold text-base mb-1 inline-block"
            >
              Cell Phone
            </label>
            <input
              id="cellphone"
              value={contact.cellphone}
              onChange={handleChange}
              className="appearance-none w-full block px-4 py-2 border-2 rounded-md shadow-md focus:outline-none focus:shadow-outline"
              name="cellphone"
              type="tel"
              placeholder="Contact cell phone"
            />
          </div>
        </div>
        <div className="w-full mt-5 flex justify-end">
          <button
            type="submit"
            className="w-full block lg:w-auto lg:inline-block px-6 py-3 bg-gray-900 hover:bg-gray-800 transition-colors ease-in-out duration-300 rounded-md shadow-md text-white font-bold"
          >
            Create Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
