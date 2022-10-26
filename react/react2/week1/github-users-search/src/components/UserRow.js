import { Text, RowContainer } from './UI';

const UserRow = ({ user }) => {
  return (
    <RowContainer>
      <img
        alt='user'
        src={user.avatar_url}
        style={{ maxWidth: '3rem', borderRadius: '50%', margin: '0 2rem' }}
      />
      <Text>{user.login}</Text>
    </RowContainer>
  );
};

export default UserRow;
