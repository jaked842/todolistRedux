import {ADD_TODO} from './constants';

const initialTodoListState = {
    todoList: []
}


export const todoList = (state = initialTodoListState, action={}) => {
    switch(action.type) {
        case ADD_TODO:
            return {...state, todoList: [...state.todoList, action.payload]}
        default: 
            return state;
    }
}