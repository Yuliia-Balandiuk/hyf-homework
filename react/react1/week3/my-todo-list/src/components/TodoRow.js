import Button from './Button';
import { useState } from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import TodoCheckbox from './TodoCheckbox';

const TodoRowBox = styled.div`
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
`;

const TodoRow = (props) => {
  const {
    id,
    todo,
    deadline,
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
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
      </div>
      <div>
        <Button
          text='Delete'
          marinLeft='1rem'
          onClick={() => deleteTodoList(id)}
        />
        {!edit ? (
          <Button text='Edit' marinLeft='1rem' onClick={() => editTodo(id)} />
        ) : (
          <Button
            text='Update'
            marinLeft='1rem'
            onClick={() => updateTodo(todo.id)}
          />
        )}
      </div>
    </TodoRowBox>
  );
};

export default TodoRow;
