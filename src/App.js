import './App.css';
import React from 'react';
import Task from './components/Task.js'
import TaskForm from './components/TaskForm.js'

function App() {
  const [tasks, setTasks] = React.useState([
    {text: "Start To-Do List",
    isCompleted: false,
    }
  ]);

  const [count, setCount] = React.useState(0)

  const [date, setDate] = React.useState(new Date());

  const addTask = text => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
  };

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks)
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks)
  }; 

  return (
    <div className="app">
      <h2>{date.toLocaleDateString()}</h2>
      <h2>Tasks Completed: {count}</h2>
      <div className="todo-list">
        {tasks.map((tasks, index) => (
          <Task 
            key={index}
            index={index}
            tasks={tasks}
            completeTask={completeTask}
            removeTask={removeTask}
            count={count}
            setCount={setCount}
            />
        ))}
        <TaskForm 
          addTask={addTask} 
        />
      </div>
    </div>
  );
}

export default App;
