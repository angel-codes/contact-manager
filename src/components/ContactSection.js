import React, { useContext, useState } from 'react';
import ContactContext from '../context/ContactContext';
import Contact from './Contact';

// Components
import SearchContact from './SearchContact';

const ContactSection = () => {
  // Local State
  const [word, setWord] = useState('');

  // Access to the data in the context
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <main className="mt-8 p-8 bg-white rounded-md">
      <h2 className="text-2xl text-center font-bold">Contact List</h2>
      <div className="mt-5">
        <SearchContact word={word} setWord={setWord} />
        <div className="mt-8">
          {contacts.length <= 0 ? (
            <p className="text-center text-gray-600">No contacts yet</p>
          ) : null}
          {contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(word.toLowerCase())
            )
            .map(contact => (
              <Contact key={contact.id} contact={contact} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default ContactSection;
