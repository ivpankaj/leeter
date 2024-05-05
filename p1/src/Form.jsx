// InputForm.js

import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [data, setData] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/pankaj/api/data', { data });
      alert('Data saved successfully');
      setData('');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data');
    }
  };
  

  return (
    <div>
      <h2>Input Form</h2>
      <input
        type="text"
        placeholder="Enter data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
