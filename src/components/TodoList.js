// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = props => {

  const handleClick = ()=> {
    props.handleTodoCompleted();
  }
  

  return (
    <div className="shopping-list">
        {props.todo.map(todo => (
            <Todo handleTodoToggle={props.handleTodoToggle} key={todo.id} todo={todo} />
        ))}
    <button onClick={handleClick} className="clear-btn" >
        Clear Completed
    </button>
    </div>
  );
};

export default TodoList;