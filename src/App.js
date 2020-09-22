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
      </div>
    </ContactState>
  );
}

export default App;
