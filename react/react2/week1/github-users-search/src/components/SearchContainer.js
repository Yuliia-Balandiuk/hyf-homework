import { useState, useEffect } from 'react';
import { SearchInput } from './UI';
import UserRow from './UserRow';

const SearchContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async (query) => {
    setLoading(true);
    const API_URL = `https://api.github.com/search/users?q=${query}`;
    await fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data.items))
      .catch((error) => {
        console.error('Error:', error);
      });
    setLoading(false);
  };

  return (
    <>
      <SearchInput
        type='text'
        placeholder='Search for user'
        onChange={(e) => fetchUsers(e.target.value)}
      />
      {loading && <p>LOADING ... </p>}
      {!users || users.length === 0 ? (
        <div>No results</div>
      ) : (
        users.map((user) => {
          return <UserRow key={user.id} user={user}></UserRow>;
        })
      )}
    </>
  );
};

export default SearchContainer;
