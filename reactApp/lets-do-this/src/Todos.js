import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    
const TodoList = todos.length ? (
todos.map(todo => {
    return(
        <div className="collection-item" key={todo.id}>
            <span onClick={ ()=> {deleteTodo(todo.id)} }>{todo.content}</span>
        </div>
    )
} )
) : ( <p classname='center'> You have No Todo to do. Go get some food. </p> )

    return (
        <div className= 'todos collection pink-text'>
            {TodoList}
           
        </div>
    )
}
export default Todos