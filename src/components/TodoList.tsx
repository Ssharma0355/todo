import React from 'react'
import { Todo } from '../Model';
import "./Todolist.css"

interface Props{
    todos:Todo[]
}
const TodoList: React.FC<Props> = ({todos}) => {
    console.log(todos)
  return (
    <div>
     {todos.map(t=>(
        <div className='todo' key={t.id}>{t.todo}
        <h1>{t.todo}</h1>
        </div>
        
     ))}
      
    </div>
  )
}

export default TodoList
