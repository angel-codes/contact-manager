import React from 'react';
import Contact from './Contact';

// Components
import SearchContact from './SearchContact';

const ContactSection = () => {
  return (
    <main className="mt-8 p-8 bg-white rounded-md">
      <h2 className="text-2xl text-center font-bold">Contact List</h2>
      <div className="mt-5">
        <SearchContact />
        <div className="mt-8">
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default ContactSection;
