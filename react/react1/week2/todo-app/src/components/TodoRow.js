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
  const { item, index, updateTodoList } = props;

  const [checked, setChecked] = useState(false);

  return (
    <TodoRowBox>
      <TodoCheckbox checked={checked} setChecked={setChecked} />
      <TodoItem checked={checked} description={item.description} />
      <Button
        index={index}
        text='Delete'
        onClick={() => updateTodoList(item.id)}
      />
    </TodoRowBox>
  );
};

export default TodoRow;
