import React, { useState } from 'react';
import { createActivity } from '../services/api';

const ActivityForm = () => {
  const [formData, setFormData] = useState({
    technology: '',
    description: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createActivity(formData)
      .then((response) => {
        console.log("Activity Created:", response);
        // Reset the form after successful submission
        setFormData({ technology: '', description: '', date: '' });
      })
      .catch((error) => {
        console.error("Error creating activity:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="technology" className="block text-lg font-semibold">
          Technology
        </label>
        <input
          type="text"
          id="technology"
          name="technology"
          value={formData.technology}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-lg font-semibold">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-lg font-semibold">
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none"
      >
        Add Activity
      </button>
    </form>
  );
};

export default ActivityForm;
