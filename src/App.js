import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { addTodo } from './Actions';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* A header of the project */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Challenge 3: REDUX + REACT ToDo list!</h1>
        </header>

        <h2> To-do List:</h2>

        {/* The visual elements that get the input and dispatch the action responsible to add a Todo */}
        <AddTodo />
       
        {/* The element who display a list of todo elements */}
        <TodoList />
        
      </div>
    );
  }
}

export default App;
