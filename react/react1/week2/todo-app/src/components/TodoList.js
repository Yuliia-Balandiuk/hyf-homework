import { useState } from 'react';
import { todos } from '../data';
import Button from './Button';
import TodoRow from './TodoRow';

const TodoList = () => {
  const [todosList, setTodosList] = useState(todos);

  let uniqId = Math.random().toString(16).slice(2);

  const newTodo = {
    id: uniqId,
    description: `random text with uniq id: ${uniqId}`,
  };

  function addTodo() {
    setTodosList([...todosList, newTodo]);
  }

  function deleteTodoList(id) {
    const updetedList = todosList.filter((el) => el.id !== id);

    setTodosList(updetedList);
  }

  return (
    <>
      <Button onClick={addTodo} bigSize text='Add todo' />
      <div>
        {todosList.map((item) => (
          <TodoRow
            item={item}
            key={item.id}
            deleteTodoList={() => deleteTodoList(item.id)}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
