import React from 'react';

const Form = () => {
  return (
    <div className="p-8 bg-white rounded-md">
      <h2 className="text-2xl text-center font-bold">Add a Contact</h2>
      <form className="mt-5">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label
              htmlFor="name"
              className="font-bold text-base mb-1 inline-block"
            >
              Name
            </label>
            <input
              className="appearance-none w-full block px-4 py-2 border-2 rounded-md shadow-md focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Contact name"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="font-bold text-base mb-1 inline-block"
            >
              Company
            </label>
            <input
              className="appearance-none w-full block px-4 py-2 border-2 rounded-md shadow-md focus:outline-none focus:shadow-outline"
              name="company"
              type="text"
              placeholder="Contact company"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="font-bold text-base mb-1 inline-block"
            >
              Cell Phone
            </label>
            <input
              className="appearance-none w-full block px-4 py-2 border-2 rounded-md shadow-md focus:outline-none focus:shadow-outline"
              name="name"
              type="tel"
              placeholder="Contact cell phone"
            />
          </div>
        </div>
        <div className="w-full mt-5 flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 hover:bg-gray-800 transition-colors ease-in-out duration-300 rounded-md shadow-md text-white font-bold"
          >
            Create Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
