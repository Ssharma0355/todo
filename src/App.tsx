import React, { useState } from 'react';
import "./App.css";
import InputField from './components/InputField';
const App: React.FC = () => {
  const [todo, SetTodo] = useState<string>("")
  return (
    <div className='App'>
      <span className='Heading'>Taskify</span>
      <InputField todo={todo} SetTodo={SetTodo} />
    </div>
  )
}

export default App
