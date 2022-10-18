import Button from './Button';
import { useState } from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import TodoCheckbox from './TodoCheckbox';

const TodoRowBox = styled.div`
  display: flex;
  align-items: center;
`;

const TodoRow = (props) => {
  const { item, deleteTodoList } = props;

  const [checked, setChecked] = useState(false);

  return (
    <TodoRowBox>
      <TodoCheckbox checked={checked} setChecked={setChecked} />
      <TodoItem checked={checked} description={item.description} />
      <Button text='Delete' onClick={() => deleteTodoList(item.id)} />
    </TodoRowBox>
  );
};

export default TodoRow;
