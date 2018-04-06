import React from 'react';
import { addTodo } from './Actions.js';
import { connect } from 'react-redux'
import './App.css';
import './TodoList';

const AddTodo = ({AddTodoDispatch}) =>{
        return(
        <div className="Tasks">
          <button className="AddButton" onClick={() =>{
              if(this.input.value !== ''){
              AddTodoDispatch(this.input.value);
              this.input.value = ''}}}>
             Add a new task
          </button>
          <input className="Tasks-input" ref={node =>{
              this.input = node;
          }} />
        </div>
        );
}

const mapDispatchToProps = (dispatch) => (
    {
      AddTodoDispatch: (inputSpace) => dispatch(addTodo(inputSpace))
    }
);

export default connect(undefined, mapDispatchToProps)(AddTodo)