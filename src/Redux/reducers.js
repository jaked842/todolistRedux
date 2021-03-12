import {ADD_TODO, EDIT_TODO, DELETE_TODO} from './constants';

const initialTodoListState = {
    todoList: []
}

const updateTodo = (state, value, index) => {
    let arr = [...state];
    arr[index] = value;
    return arr;
}

const deleteTodo = (state, index) => {
    let arr = [...state];
    arr.splice(index, 1);
    return arr;
}

export const todoList = (state = initialTodoListState, action={}) => {
    switch(action.type) {
        case ADD_TODO:
            return {...state, todoList: [...state.todoList, action.payload]}
        case EDIT_TODO:
            return {...state, todoList: updateTodo(state.todoList, action.payload.text, action.payload.index)}
        case DELETE_TODO: 
            return {...state, todoList: deleteTodo(state.todoList, action.payload)}
        default: 
            return state;
    }
}