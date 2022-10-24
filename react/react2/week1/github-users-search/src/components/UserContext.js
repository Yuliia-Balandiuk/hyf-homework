import { createContext, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLimit, setIsLimit] = useState(false);

  const fetchUsers = async (query) => {
    setLoading(true);
    const API_URL = `https://api.github.com/search/users?q=${query}`;
    await fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data.items))
      .catch((error) => setError(error));
    setLoading(false);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        isLimit,
        setIsLimit,
        fetchUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
