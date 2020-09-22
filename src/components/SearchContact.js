import React from 'react';
import PropTypes from 'prop-types';

const SearchContact = ({ word, setWord }) => {
  const handleChange = e => {
    setWord(e.target.value);
  };

  return (
    <div className="w-full relative">
      <input
        value={word}
        onChange={handleChange}
        className="text-lg w-full block border-2 shadow-md pl-12 pr-5 py-3 rounded-md appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search contact"
      />
      <div className="absolute top-0 left-0 mt-4 ml-4">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

SearchContact.propTypes = {
  setWord: PropTypes.func.isRequired
};

export default SearchContact;
