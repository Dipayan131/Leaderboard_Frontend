import React, { useState } from 'react';
import axios from 'axios';

function AddUserForm({ fetchUsers }) {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_URL}/api/users/add`, { name });
      setName('');
      fetchUsers();  // Refresh the user list after adding a new user
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex gap-4">
        <input 
          type="text" 
          placeholder="Enter user name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:border-blue-500 transition-all"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
          Add User
        </button>
      </div>
    </form>
  );
}

export default AddUserForm;
