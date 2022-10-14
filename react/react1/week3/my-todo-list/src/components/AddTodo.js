import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AddTodo = ({ newTodo, setNewTodo }) => {
  return (
    <DescriptionWrapper>
      <p>Todo description</p>
      <input
        type='text'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      ></input>
    </DescriptionWrapper>
  );
};

export default AddTodo;
