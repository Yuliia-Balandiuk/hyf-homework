import styled from 'styled-components';
import TodoItem from './TodoItem';
import TodoCheckbox from './TodoCheckbox';
import { useState } from 'react';
import Button from './Button';

const TodoRowBox = styled.div`
  display: flex;
  align-items: center;
`;

const TodoRow = ({ item }) => {
  const [checked, setChecked] = useState(false);

  return (
    <TodoRowBox>
      <TodoCheckbox checked={checked} setChecked={setChecked} />
      <TodoItem checked={checked} description={item.description} />
      <Button text='Delete' />
    </TodoRowBox>
  );
};

export default TodoRow;
