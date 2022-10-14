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
  const {
    id,
    todo,
    deadline,
    marinLeft,
    todosList,
    description,
    setTodosList,
    deleteTodoList,
  } = props;

  const [edit, setEdit] = useState(false);
  const [checked, setChecked] = useState(false);
  const [updatedDesc, setUpdatedDesc] = useState('');

  function editTodo() {
    setEdit(!edit);
  }

  function updateTodo(id) {
    const updated = todosList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, description: updatedDesc };
      }
      return todo;
    });
    setTodosList(updated);
    setEdit(false);
  }

  return (
    <TodoRowBox>
      <TodoCheckbox checked={checked} setChecked={setChecked} />
      {!edit ? (
        <TodoItem
          id={id}
          checked={checked}
          deadline={deadline}
          description={description}
        />
      ) : (
        <input
          type='text'
          value={updatedDesc}
          onChange={(e) => setUpdatedDesc(e.target.value)}
        />
      )}
      <Button
        text='Delete'
        marinLeft={marinLeft}
        onClick={() => deleteTodoList(id)}
      />
      {!edit ? (
        <Button
          text='Edit'
          marinLeft={marinLeft}
          onClick={() => editTodo(id)}
        />
      ) : (
        <Button
          text='Update'
          marinLeft={marinLeft}
          onClick={() => updateTodo(todo.id)}
        />
      )}
    </TodoRowBox>
  );
};

export default TodoRow;
