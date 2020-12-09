import React from 'react'

export function Todo({ toDo, index, completeTodo, removeTodo }) {
    return (
      <div 
        className="toDo"
        style={{ textDecoration: toDo.isCompleted ? "line-through": ""}}>
          {toDo.text} 
          <div>
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>Delete</button>
          </div>
        </div>
    )
  }