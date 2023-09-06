import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task,toggleComplete,deleteTodos,editTodos}) => {
  return (
    <div className='Todo'>
        <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed' :""}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodos(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodos(task.id)} />
        </div>
    </div>
  )
}
