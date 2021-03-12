import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './Redux/actions';
import TodoEntry from './todoEntry';
import TodoListContainer from './todoListContainer';

const mapDispatchToProps = dispatch => ({
  add: value => dispatch(addTodo(value)),
})

const App = ({add}) => {
  
  return (
    <div className="App">
      <TodoEntry addTodo={add}/>
      <TodoListContainer />
    </div>
  );
}

export default connect(null, mapDispatchToProps)(App);
