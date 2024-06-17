import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/Taskform'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <h1>Event Handler </h1>
          <TodoForm/>
          

      </div>
 
    );
  }
  


export default App
