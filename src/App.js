import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './Redux/actions';
import TodoEntry from './todoEntry';


const mapStateToProps = state => ({
  todoList: state.todoList.todoList
})
const mapDispatchToProps = dispatch => ({
  add: value => dispatch(addTodo(value))
})

const App = (props) => {
  const {add} = props;
  return (
    <div className="App">
      <TodoEntry addTodo={add}/>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
