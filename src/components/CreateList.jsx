import React from 'react'
import { useState, useContext } from 'react'
import { TasksContext } from '../Providers/Tasks/tasks.provider';

const INITIAL_STATE = {
    title: '',
}
function CreateList({setTaskList}) {
    const { createTask } = useContext(TasksContext)
    const [taskTitle, setTaskTitle] = useState(' ')
    
    const handleInput = (e)=>{
        if(!e) return;
        setTaskTitle(e.target.value)

    }

    const handleCreateTask =(e)=>{
        e.preventDefault()
        let id = Math.ceil(Math.random() * 100000000);
        const newTask = {
            title:taskTitle,
            id:id
            
        
        }

        console.log(newTask)
        createTask(newTask)
        // setTaskList(prev => [newTask,...prev] )
        
    }
  return (
    <div>
        <div className="inputWrapper">
            <input type='text' name= 'list' placeholder= 'Create Task' onChange={handleInput}/>
            <button type='button' onClick={handleCreateTask}>Submit</button>
        </div>
    </div>
  )
}

export default CreateList