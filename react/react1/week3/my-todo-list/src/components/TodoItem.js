import styled from 'styled-components';

const Text = styled.p`
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;

const TodoItem = (props) => {
  const { checked, description, deadline } = props;

  return (
    <>
      <Text checked={checked}>
        {description} | {deadline}
      </Text>
    </>
  );
};

export default TodoItem;
