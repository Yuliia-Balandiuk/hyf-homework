import { todos } from '../data';
import Button from './Button';
import TodoRow from './TodoRow';

const TodoList = () => {
  // useState like arr, add or remove elem
  return (
    <>
      <Button bigSize text='Add todo' />
      <div>
        {todos.map((item, i) => (
          <TodoRow key={i} item={item} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
