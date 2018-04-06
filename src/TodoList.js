import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import Todo from './Todo';
import {createStore} from 'redux';
import {connect} from 'react-redux'

const TodoList = ({todos}) =>{
   return(
       <div className="List">
           <ul>
                {todos.map(todo =>
                    <li key={todo.id}>
                        {/* Each todo element is invoked here */}
                        <Todo {...todo} />
                    </li>)}
          </ul>
        </div>
   );
}

const mapStateToProps = (state) => ({
  todos: state
})

export default connect(mapStateToProps, undefined)(TodoList);
