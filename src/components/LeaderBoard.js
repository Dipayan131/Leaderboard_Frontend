import React from 'react';

function Leaderboard({ users }) {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-4 text-purple-700">Leaderboard</h2>
      <ul className="divide-y divide-gray-300">
        {users.map((user, index) => (
          <li key={user._id} className="py-4 flex justify-between items-center">
            <span className="text-xl font-medium text-gray-800">{index + 1}. {user.name}</span>
            <span className="text-lg font-bold text-blue-600">{user.points} points</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
