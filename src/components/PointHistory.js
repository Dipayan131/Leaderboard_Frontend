import React from 'react';

function PointHistory({ pointHistory }) {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-4 text-purple-700">Claim Point History</h2>
      <ul className="divide-y divide-gray-300">
        {pointHistory.map((history, index) => (
          <li key={history._id} className="py-4 flex justify-between items-center">
            <span className="text-lg font-medium text-gray-800">{index + 1}. {history.userId.name}</span>
            <span className="text-sm text-gray-600">{new Date(history.timestamp).toLocaleString()}</span>
            <span className="text-lg font-bold text-green-600">+{history.points} points</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PointHistory;
