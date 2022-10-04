import { useState } from 'react';
import { todos } from '../data';
import Button from './Button';
import TodoRow from './TodoRow';

const TodoList = () => {
  const [todosList, setTodosList] = useState(todos);
  const [updateList, setUpdateList] = useState(todosList);

  function addTodo() {
    setTodosList(
      todosList.concat({
        id: todosList.length + 1,
        description: `random text with id: ${todosList.length + 1}`,
      })
    );
    console.log(todosList);
  }

  function updateTodoList(index) {
    setUpdateList(updateList.splice(index, 1));
  }

  return (
    <>
      <Button onClick={addTodo} bigSize text='Add todo' />
      <div>
        {todosList.map((item, index) => (
          <TodoRow key={index} item={item} onClick={updateTodoList} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
