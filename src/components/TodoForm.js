import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor(){
    super();
    this.state = {
      inputValue: ''
    }
  }

  handleTodoChange = e => {
    // update state with each keystroke
    this.setState({
      inputValue: e.target.value
    });
  };

  // class property to submit form
  handleTodoSubmit = (e) => {
    e.preventDefault();
    this.props.handleTodoAdd(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleTodoSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input value={this.state.inputValue} onChange={this.handleTodoChange} type="text" name="todo" />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;