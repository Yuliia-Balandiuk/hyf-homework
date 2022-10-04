import { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import TodoCheckbox from './TodoCheckbox';
import Button from './Button';

const TodoRowBox = styled.div`
  display: flex;
  align-items: center;
`;

const TodoRow = ({ item, index, onClick }) => {
  const [checked, setChecked] = useState(false);
  return (
    <TodoRowBox>
      <TodoCheckbox checked={checked} setChecked={setChecked} />
      <TodoItem checked={checked} description={item.description} />
      <Button index={index} text='Delete' onClick={onClick} />
    </TodoRowBox>
  );
};

export default TodoRow;
