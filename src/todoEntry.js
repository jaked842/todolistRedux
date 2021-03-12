import React, { Component } from 'react';

class TodoEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoItem: ''
        }
    }
    onchange = (event) => {
        this.setState({
            todoItem: event.target.value
        })
        console.log(this.state)
    }
  
    render() {
        const {onchange} = this;
        const {addTodo} = this.props;
        return (
            <form>
                <input type='text' onChange={event => onchange(event)}></input>
                <button type='button' onClick={() => addTodo(this.state.todoItem)}>AddTodo</button>
            </form>
        )
    }
}
export default TodoEntry;