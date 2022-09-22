import React from 'react';
import ToDoItem from './ToDoItem';
import { ToDoItems } from '../data';

const ToDoList = () => {
  return (
    <div>
      {ToDoItems.map((ToDoItems) => (
        <ToDoItem
          key={ToDoItems.id}
          id={ToDoItems.id}
          description={ToDoItems.description}
          deadline={ToDoItems.deadline}
        />
      ))}
    </div>
  );
};

export default ToDoList;
