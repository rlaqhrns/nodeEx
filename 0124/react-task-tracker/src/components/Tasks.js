import React from 'react';
import Task from './Task';
export default function Tasks({tasks,onDelete}){
  
  return (
    //setTasks([...tasks,{}])
    <div>
      {tasks.map( (task) => (
        <Task key={task.id} task={task} onDelete={onDelete}>
          {' '}
        </Task>
      ))}
      
    </div>
  )
}