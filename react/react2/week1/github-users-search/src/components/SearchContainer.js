import { useContext } from 'react';
import { SearchInput } from './UI';
import UserContext from './UserContext';
import UserRow from './UserRow';

const SearchContainer = () => {
  const { users, loading, error, fetchUsers } = useContext(UserContext);

  return (
    <>
      <SearchInput
        type='text'
        placeholder='Search for user'
        onChange={(e) => fetchUsers(e.target.value)}
      />
      {loading && <p>LOADING ... </p>}
      {error && <p>{error}</p>}
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
