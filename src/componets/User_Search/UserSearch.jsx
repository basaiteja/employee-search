import React, { useState } from 'react';
import './style.css';

const userList = [
    { id: 1, profileName: 'John Doe', role: 'Developer', profilePicture: 'john.jpg' },
    { id: 2, profileName: 'Jane Doe', role: 'Designer', profilePicture: 'jane.jpg' },
    { id: 3, profileName: 'Aarav Patel', role: 'Engineer', profilePicture: 'aarav.jpg' },
    { id: 4, profileName: 'Ishita Sharma', role: 'Architect', profilePicture: 'ishita.jpg' },
    { id: 5, profileName: 'Aditya Singh', role: 'Data Scientist', profilePicture: 'aditya.jpg' },
    { id: 6, profileName: 'Ananya Kapoor', role: 'Product Manager', profilePicture: 'ananya.jpg' },
    { id: 7, profileName: 'rajesh Singh', role: 'Data Scientist', profilePicture: 'aditya.jpg' },
    { id: 8, profileName: 'karpil Kapoor', role: 'Product Manager', profilePicture: 'ananya.jpg' },
    { id: 9, profileName: 'ANIL', role: 'Product Manager', profilePicture: 'ANil.jpg' },
  ];
  

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const limit = 20;

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredUsers = userList.filter(user =>
      user.profileName.toLowerCase().includes(term.toLowerCase()) ||
      user.role.toLowerCase().includes(term.toLowerCase())
    ).slice(0, limit);

    setSearchResults(filteredUsers);
  };

  return (
    <div className="user-search-container">
      <input type="text" placeholder="Search users by profile name or role" value={searchTerm} onChange={handleSearch} className="user-search-input" />
      <ul className="user-list">
        {searchResults.map(user => (
          <li key={user.id} className="user-list-item">
            <img src={user.profilePicture} alt={user.profileName} className="user-profile-picture" width="50" height="50" />
            <strong>{user.profileName}</strong> - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
