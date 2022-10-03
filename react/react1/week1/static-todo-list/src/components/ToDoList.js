import React from 'react';
import ToDoItem from './ToDoItem';
import { toDoItems } from '../data';

const ToDoList = () => {
  return (
    <div>
      {toDoItems.map((item) => (
        <ToDoItem
          key={item.id}
          id={item.id}
          description={item.description}
          deadline={item.deadline}
        />
      ))}
    </div>
  );
};

export default ToDoList;
