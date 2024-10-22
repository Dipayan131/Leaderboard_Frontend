import React from 'react';

function UserDropdown({ users, setSelectedUser }) {
  return (
    <select
      onChange={(e) => setSelectedUser(e.target.value)}
      className="w-full max-w-xs px-4 py-2 bg-white border-2 border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:border-blue-500 transition-all"
    >
      <option value="">Select User</option>
      {users.map((user) => (
        <option key={user._id} value={user._id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}

export default UserDropdown;
