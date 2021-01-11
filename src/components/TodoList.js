// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = props => {

  const handleClick = ()=> {
    props.handleTodoCompleted();
  }
  

  return (
    <div>
        {props.todo.map(todo => (
            <Todo handleTodoToggle={props.handleTodoToggle} key={todo.id} todo={todo} />
        ))}
    <button onClick={handleClick} >
        Clear Todo
    </button>
    </div>
  );
};

export default TodoList;