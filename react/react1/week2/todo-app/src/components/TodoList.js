import { useState } from 'react';
import { todos } from '../data';
import Button from './Button';
import TodoRow from './TodoRow';

const TodoList = () => {
  const [todosList, setTodosList] = useState(todos);

  const newTodo = {
    id: todosList.length + 1,
    description: `random text with id: ${todosList.length + 1}`,
  };

  function addTodo() {
    setTodosList([...todosList, newTodo]);
  }

  function updateTodoList(id) {
    const updetedList = todosList.filter((el) => el.id !== id);

    setTodosList(updetedList);
  }

  return (
    <>
      <Button onClick={addTodo} bigSize text='Add todo' />
      <div>
        {todosList.map((item, index) => (
          <TodoRow
            key={index}
            index={index}
            item={item}
            updateTodoList={updateTodoList}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
