import React from 'react'
import "./styles.css"
interface Props{
    todo:string;
    SetTodo:React.Dispatch<React.SetStateAction<string>>
}
const InputField = ({todo, SetTodo}:Props) => {
  return (
    <form className='input'>
        <input type="text" placeholder='Enter your task' className='input_box' />
        <button className='button' type='submit'>Go</button>
    </form>
  )
}

export default InputField
