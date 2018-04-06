import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import {connect} from 'react-redux';
import {store} from './index';
import {createStore} from 'redux';
import { removeTodo } from './Actions.js';
import { toggleChecked } from './Actions.js';


const Todo = ({...todo,ToggleCheckedDispatch, RemoveTodoDispatch}) =>{
    return(
        <div>
            {todo.checked?
                todo.text + ' ✓ ':
                todo.text}
            <button className="CheckButton" onClick={() =>{
                                                ToggleCheckedDispatch(todo.id)}}>
                {todo.checked?
                ' Clear ':
                'Check'}
            </button>
            <button className="RemoveButton" onClick={() =>{
                                                RemoveTodoDispatch(todo.id);}}>
                Remove 
            </button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => (
    {
      ToggleCheckedDispatch: (td_ID) => dispatch(toggleChecked(td_ID)),
      RemoveTodoDispatch: (td_ID) => dispatch(removeTodo(td_ID))
    }
);

export default connect(undefined, mapDispatchToProps)(Todo)