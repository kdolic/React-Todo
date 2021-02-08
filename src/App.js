// FLEX COPY

import React from 'react';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
import TodoList from './components/TodoList';

const todo = [
  {
    task: 'Finish Project',
    id: Date.now(),
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    state = {
      todo: todo
    }

/*********************** Todo Toggled ************************* */
  handleTodoToggle = (todoId) => {
    this.setState({
      todo: this.state.todo.map(todo => {
        if(todo.id === todoId) {
          return {
            ...todo, completed: !todo.completed
          }
        }
        return (todo);
      })
    })
  }
/*********************** Todo Added ************************* */
  handleTodoAdd = (todoName) => {
    const todo = {
      task: todoName,
      id: this.state.todo.length,
      completed: false
    }

    const newTodo = [...this.state.todo, todo];
    this.setState({
      todo: newTodo
    })
  }

/*********************** Todo Completed ************************* */
  handleTodoCompleted = () => {
    const newTodo = this.state.todo.filter(todo => {
      return(!todo.completed)
    });

    this.setState({
      todo: newTodo
    })
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo-List App</h1>
          <TodoForm handleTodoAdd={this.handleTodoAdd} />
        </div>
        <TodoList todo={this.state.todo} handleTodoToggle={this.handleTodoToggle} handleTodoCompleted={this.handleTodoCompleted} />
      </div>
    );
  }
}

export default App;
