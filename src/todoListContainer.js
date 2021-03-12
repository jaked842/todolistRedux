import React from 'react'
import { connect } from 'react-redux';
import { editTodo, deleteTodo } from './Redux/actions';
import TodoList from './todoList';

const mapDispatchToProps = dispatch => ({
    edit: (text, index) => dispatch(editTodo(text, index)), 
    del: index => dispatch(deleteTodo(index))
})
const mapStateToProps = state => ({
    todoList: state.todoList
})


const TodoListContainer = ({todoList, edit, del}) => {
    return (
        <div>
            {
                todoList.map((value, index) => (
                    <TodoList key={index} value={value} index={index} edit={edit} del={del}/> 
                ))
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
