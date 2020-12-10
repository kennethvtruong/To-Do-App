import React from 'react'

export function Task({ tasks, index, completeTask, removeTask }) {
    return (
      <div 
        className="tasks"
        style={{ textDecoration: tasks.isCompleted ? "line-through": ""}}>
          {tasks.text} 
          <div>
            <button onClick={() => completeTask(index)}>Complete</button>
            <button onClick={() => removeTask(index)}>Delete</button>
          </div>
        </div>
    )
  }