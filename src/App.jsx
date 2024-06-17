import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/Taskform'
import TodoList from './components/TodoList'
import Popup from './components/Popup'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <h1>Event Handler </h1>
          <TodoForm/>
          <TodoList/>
          <button >Show added Tasks</button>
          <Popup/>
      </div>
 
    );
  }
  


export default App
