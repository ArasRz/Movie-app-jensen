import React, { useState } from 'react';

const Form = ({ handleSearch }) => {
  const [term, setTerm] = useState('');

  const handleInputChange = (event) => {
    setTerm(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <div className='form'>
      <form>
        <input
          type="text"
          value={term}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Form;
