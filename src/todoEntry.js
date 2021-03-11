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
    componentDidMount() {
    }
    render() {
        const {onchange} = this;
        return (
            <form>
                <input type='text' onChange={event => onchange(event)}></input>
                <button type='button' onClick={() => this.props.addTodo(this.state.todoItem)}>AddTodo</button>
            </form>
        )
    }
}

export default TodoEntry;