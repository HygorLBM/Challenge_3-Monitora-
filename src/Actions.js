import './index.css';


let nextId = 0;

export const addTodo= (text) => {
    return {
        type: 'ADD_TODO',
        id: nextId++,
        text
    }
};

export const toggleChecked= (td_ID) => {
    return {
        type: 'TOGGLE_CHECKED',
        id: td_ID,
    }
};

export const removeTodo= (td_ID) => {
    return {
        type: 'REMOVE_TODO',
        id: td_ID,
    }
};
