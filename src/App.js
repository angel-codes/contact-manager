import React from 'react';

// Context
import ContactState from './context/ContactState';

// Components
import Form from './components/Form';
import ContactSection from './components/ContactSection';
import Alerts from './components/Alerts';

function App() {
  return (
    <ContactState>
      <div className="min-h-screen bg-gray-900 relative">
        <Alerts />
        <div className="w-full py-3 bg-gray-800 text-center">
          <h1 className="text-3xl text-white font-bold">Contact Manager</h1>
        </div>
        <div className="container mx-auto mt-10 px-2">
          <Form />
          <ContactSection />
        </div>
        <div className="absolute bottom-0 left-0 w-full text-center mb-4">
          <p className="text-gray-500">
            Made with ❤ by{' '}
            <a
              href="https://github.com/angel-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Angel Martinez
            </a>{' '}
          </p>
        </div>
      </div>
    </ContactState>
  );
}

export default App;
