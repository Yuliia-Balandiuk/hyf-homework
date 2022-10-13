import { useState } from 'react';
import { todos } from '../data';
import Button from './Button';
import Calendar from './Calendar';
import TodoRow from './TodoRow';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todosList, setTodosList] = useState(todos);
  const [newTodo, setNewTodo] = useState('');
  const [date, setDate] = useState('');

  let uniqId = Math.random().toString(16).slice(2);

  const newTodoItem = {
    id: uniqId,
    description: newTodo,
    deadline: date,
  };

  function addTodo() {
    setTodosList([...todosList, newTodoItem]);
  }

  function deleteTodoList(id) {
    const updetedList = todosList.filter((el) => el.id !== id);

    setTodosList(updetedList);
  }

  return (
    <>
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} />
      <Calendar date={date} setDate={setDate} />
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
