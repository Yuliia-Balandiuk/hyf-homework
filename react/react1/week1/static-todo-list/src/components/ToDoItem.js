import React from 'react';

const ToDoItem = (props) => {
  console.log(ToDoItem);
  return (
    <div>
      <p>{props.id}</p>
      <p>{props.description}</p>
      <p>{props.deadline}</p>
    </div>
  );
};

export default ToDoItem;
