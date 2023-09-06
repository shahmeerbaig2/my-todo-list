import React, { useState } from 'react'

export const EditTodoForm = ({editTodos,task}) => {
    const [value,setValue]=useState('');
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        editTodos(value,task.id);
        setValue("");
        
        console.log(value);
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
    <input type='text' className='todo-input' value={value} placeholder='update task' onChange={(e)=>{setValue(e.target.value)} }/>
    <button type='submit' className='todo-btn'>update Task</button>
    </form>
  )
}
