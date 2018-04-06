import './index.css';
import {Reducer} from 'redux';


const todos = (state= [] , action) => {
    switch (action.type){
      case 'ADD_TODO':
        return [
           ...state,
          {
            id: action.id,
            text: action.text,
            checked: false
          },
        ];

      case 'TOGGLE_CHECKED':
        return state.map(todo =>{
          if (todo.id !== action.id){
            return todo;
          }
        return{
          ...todo,
          checked: !todo.checked
        }
      });     

      case 'REMOVE_TODO':
      state.map(todo =>{
        if (todo.id === action.id){
          found = todo.id;
        }
         }); 
      return state.filter(deleted);
       

      default:
        return  state;
 
    }
  };

  var found = 0;
const deleted = (state=[]) => {
   return (state.id !== found)
};

export default todos;