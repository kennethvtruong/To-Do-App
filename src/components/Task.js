import React from 'react'

function Task({ tasks, index, completeTask, removeTask, count, setCount}) {
    const handleClick = () => {
      completeTask(index);
      setCount(count+1);
    }
    return (
      <div 
        className="tasks"
        style={{ textDecoration: tasks.isCompleted ? "line-through": ""}}>
          {tasks.text} 
          <div>
            <button onClick={handleClick} 
                    disabled={tasks.isCompleted}>Complete</button>
            <button onClick={() => removeTask(index)}>Delete</button>
          </div>
        </div>
    )
  }

 export default Task;