import {ADD_TODO, EDIT_TODO, DELETE_TODO} from './constants';

export const addTodo = text => ({
    type: ADD_TODO,
    payload: text
})

export const editTodo = (text, index) => ({
    type: EDIT_TODO,
        payload: {
            text: text,
            index: index
        }   
})

export const deleteTodo = index => ({
    type: DELETE_TODO,
    payload: index
})