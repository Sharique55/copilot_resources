import React, { useState } from 'react';
import { addEmployee } from '../services/DataService';

const AddEmpl: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');

  const [addedLabel, setAddedLabel] = useState('');

  const handleAddEmpl = async () => {
    await addEmployee({
      firstName: firstName,
      lastName: lastName,
      hireDate: new Date().toISOString().slice(0, 10),
      position: position
    })

    setAddedLabel(`${lastName}, ${firstName} added!`);
    
    // Reset the input fields
    setFirstName('');
    setLastName('');
    setPosition('');
  };

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Position"
      />
      <button onClick={handleAddEmpl}>Add Employee</button>
      {
        addedLabel ? <p>{addedLabel}</p> : null
      }
    </div>
  );
};

export default AddEmpl;