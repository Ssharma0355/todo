import React, { useState } from 'react';
import "./App.css";
import InputField from './components/InputField';
import { Todo } from './Model';
const App: React.FC = () => {
  const [todo, SetTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd =(e: React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone:false}])
      SetTodo("")
    }
    console.log(todos)

  }
  return (
    <div className='App'>
      <span className='Heading'>Taskify</span>
      <InputField todo={todo} SetTodo={SetTodo} handleAdd={handleAdd}/>
    </div>
  )
}

export default App
