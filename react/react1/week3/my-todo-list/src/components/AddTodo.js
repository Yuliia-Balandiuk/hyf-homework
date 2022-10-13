import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AddTodo = ({ newTodo, setNewTodo }) => {
  return (
    <DescriptionWrapper
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
    >
      <p>Todo description</p>
      <input type='text'></input>
    </DescriptionWrapper>
  );
};

export default AddTodo;
