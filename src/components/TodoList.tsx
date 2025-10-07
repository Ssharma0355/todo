import React from 'react'
import { Todo } from '../Model';

interface Props{
    todos:Todo[]
}
const TodoList: React.FC<Props> = ({todos}) => {
    console.log(todos)
  return (
    <div>
     {todos.map(t=>(
        <div key={t.id}>{t.todo}</div>
     ))}
      
    </div>
  )
}

export default TodoList
