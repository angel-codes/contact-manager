import React, { useContext } from 'react';

// Context
import ContactContext from '../context/ContactContext';

const Alerts = () => {
  const contactContext = useContext(ContactContext);
  const { alert } = contactContext;

  return (
    <>
      {alert ? (
        <div
          className={`${
            alert.category === 'success' ? 'bg-green-600 ' : 'bg-red-600'
          } absolute top-0 right-0 mt-3 mr-2 px-6 py-3 rounded-md text-white font-bold`}
        >
          <p>{alert.message}</p>
        </div>
      ) : null}
    </>
  );
};

export default Alerts;
