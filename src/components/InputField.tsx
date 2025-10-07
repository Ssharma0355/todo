import React from 'react'
import "./styles.css"
interface Props{
    todo:string;
    SetTodo:React.Dispatch<React.SetStateAction<string>>
}
const InputField: React.FC<Props> = ({todo, SetTodo}) => {
    console.log(todo)
  return (
    <form className='input'>
        <input type="text" value={todo} onChange={(e)=>SetTodo(e.target.value)} placeholder='Enter your task' className='input_box' />
        <button className='button' type='submit'>Go</button>
    </form>
  )
}

export default InputField
