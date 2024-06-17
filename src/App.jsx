import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/Taskform'
import Todolist from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <h1>Event Handler </h1>
          <TodoForm newTask={newTask}/>
          <TodoList/>

      </div>
 
    );
  }
  


export default App
