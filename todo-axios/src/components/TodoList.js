import React from 'react'
import TodoCard from './TodoCard'
import { Link } from 'react-router-dom'


const TodoList = (props) => {
    return (
        <div>
            <Link to="/add">
        <button className='btn btn-primary'>Add Todo</button>
        </Link>
          {props.todos.map((todo)=> (<TodoCard
           key={todo.id}
            todo={todo}
            getId={props.removeTodoHadler}
            />) 
           
            )}            
        </div>
    )
}

export default TodoList
