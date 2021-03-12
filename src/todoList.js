import React from 'react';

const TodoList = ({edit, del, index, value}) => {

    return (
        <form>
                <input onChange={event => edit(event.target.value, index)} style={{border: 'none'}}type='text' value={value}></input>
                <button onClick={() => del(index)}type='button'>Delete</button>
        </form>
    )
}

export default TodoList;