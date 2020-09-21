import React from 'react';

// Components
import Form from './components/Form';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="w-full py-3 bg-gray-800 text-center">
        <h1 className="text-3xl text-white font-bold">Contact Manager</h1>
      </div>
      <div className="container mx-auto mt-10">
        <Form />
      </div>
    </div>
  );
}

export default App;
