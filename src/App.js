import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserDropdown from './components/UserDropDown';
import Leaderboard from './components/LeaderBoard';
import AddUserForm from './components/AddUserForm';
import PointHistory from './components/PointHistory';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const [pointHistory, setPointHistory] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchPointHistory(); // Fetch point history when the app loads
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL}/api/users`);
    setUsers(res.data);
  };

  const handleClaim = async () => {
    if (!selectedUser) return;
    const res = await axios.post(`${process.env.REACT_APP_URL}/api/users/claim`, { userId: selectedUser });
    setMessage(res.data.message);
    fetchUsers(); 
    fetchPointHistory();  
  };

  const fetchPointHistory = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL}/api/users/history`);
    setPointHistory(res.data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 p-6">
      <h1 className="text-5xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
        Leaderboard
      </h1>
      <div className="w-full h-1 mb-6 bg-gradient-to-r from-purple-400 to-blue-500"></div> {/* Underline */}
      <div className="flex flex-col items-center gap-4">
        <UserDropdown users={users} setSelectedUser={setSelectedUser} />
        <button 
          onClick={handleClaim}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-xl transition-all"
        >
          Claim Points
        </button>
        {message && (
          <p className="text-lg font-semibold text-yellow-800 mt-2 bg-yellow-200 p-3 rounded-md shadow-md">
            {message}
          </p>
        )}
        <AddUserForm fetchUsers={fetchUsers} />
      </div>
      <Leaderboard users={users} />
      <PointHistory pointHistory={pointHistory} />
    </div>
);


}

export default App;
