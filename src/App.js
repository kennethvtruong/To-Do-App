import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Todo } from './components/Todo.js'
import { TodoForm } from './components/TodoForm.js'


function App() {
  const [toDo, setToDos] = React.useState([
    {text: "Start To-Do List",
    isCompleted: false}

  ]);

  const addToDo = text => {
    const newTodos = [...toDo, { text }];
    setToDos(newTodos);
  };

  const completeTodo =  index => {
    const newTodos = [...toDo];
    newTodos[index].isCompleted = true;
    setToDos(newTodos)
  };

  const removeTodo = index => {
    const newTodos = [...toDo];
    newTodos.splice(index, 1);
    setToDos(newTodos)
  }; 

  return (
    <div className="app">
      <div className="toDo-list">
        {toDo.map((toDo, index) => (
          <Todo 
            key={index}
            index={index}
            toDo={toDo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
        ))}
        <TodoForm addToDo={addToDo} />
      </div>
    </div>
  );
}

export default App;
