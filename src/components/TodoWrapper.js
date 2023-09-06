import React,{useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from'uuid' 
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4(); 

export const TodoWrapper = () => {
    const [todos,setTodo]=useState([])
    const addTodo= todo=>{
        setTodo([...todos,{id: uuidv4(), task:todo,completed:false,isEditing:false}])
        console.log(todos);
    } 

    const toggleComplete = id =>{
        setTodo(todos.map(todo=>todo.id === id ? {...todo, completed: !todo.completed} : todo ))

    }
    const deleteTodos= id=>{
        setTodo(todos.filter(todo=>(todo.id!==id)))
    }
    const editTodos = id =>{
        setTodo(todos.map(todo=>todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))

    }


  return (
   
    <div className='TodoWrapper' >
  <TodoForm addTodo={addTodo}/>
  {todos.map((todo,index)=>(
    todo.isEditing ? (
        <EditTodoForm/>
    ):(

        <Todo task={todo} key={index}
        toggleComplete={toggleComplete} deleteTodos={deleteTodos} editTodos={editTodos}/> 
   
    )
   
  ))}
 
  </div>
  )
}
