import React from 'react';

const ToDoItem = (props) => {
  console.log(ToDoItem);
  return (
    <div>
      <p>
        {props.id}. {props.description}, {props.deadline}
      </p>
    </div>
  );
};

export default ToDoItem;
