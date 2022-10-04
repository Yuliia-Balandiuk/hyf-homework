import styled from 'styled-components';

const Text = styled.p`
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;

const TodoItem = ({ checked, description }) => {
  return <Text checked={checked}>{description}</Text>;
};

export default TodoItem;
