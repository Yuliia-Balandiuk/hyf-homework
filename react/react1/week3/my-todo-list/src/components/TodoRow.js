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
  const { item, deleteTodoList, marinLeft } = props;

  const [checked, setChecked] = useState(false);

  return (
    <TodoRowBox>
      <TodoCheckbox checked={checked} setChecked={setChecked} />
      <TodoItem
        checked={checked}
        description={item.description}
        deadline={item.deadline}
      />
      <Button
        text='Delete'
        marinLeft={marinLeft}
        onClick={() => deleteTodoList(item.id)}
      />
      <Button text='Edit' marinLeft={marinLeft} />
    </TodoRowBox>
  );
};

export default TodoRow;
