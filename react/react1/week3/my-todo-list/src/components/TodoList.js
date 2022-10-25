import { useState, useEffect } from 'react';
import Button from './Button';
import TodoRow from './TodoRow';
import AddTodo from './AddTodo';
import Calendar from './Calendar';
import BlackBorder from './BorderComponent';

const TodoList = () => {
  const [date, setDate] = useState('');
  const [newTodo, setNewTodo] = useState('');
  const [todosList, setTodosList] = useState([]);

  const API_URL =
    'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw';

  const FetchApi = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((result) => setTodosList(result))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    FetchApi();
  }, []);

  let uniqId = Math.random().toString(16).slice(2);

  const newTodoItem = {
    id: uniqId,
    deadline: date,
    description: newTodo,
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
        {todosList.map((todo) => (
          <BlackBorder>
            <TodoRow
              todo={todo}
              key={todo.id}
              todosList={todosList}
              deadline={todo.deadline}
              setTodosList={setTodosList}
              description={todo.description}
              deleteTodoList={() => deleteTodoList(todo.id)}
            />
          </BlackBorder>
        ))}
      </div>
    </>
  );
};

export default TodoList;
