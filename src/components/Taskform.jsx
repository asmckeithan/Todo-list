import React, {useState} from 'react'


//Creating a functional component that is looking for the property newTask
//task variable is the current value of the state which is an empty string 
//setTask is used to update the value of task in the TodoList 
const TodoForm = ({newTask}) => {
    const [task,setTask] = useState("");

  // creating a variable using an arrow function , using event as a parameter to help update the task
   const handlechange = (event) => {
    setTask(event.target.value);
   }

   //If task is entered with no empy value or trim then we can execute/call functions above for newTask and setTask
   const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
        newTask(task);
        setTask('')
    }
   }
    return(
        //Created a form and input bar to input oru new task 
       <form action="submit">
        <input type="text" placeholder='Enter new Task here' value={task} onChange={handlechange}/>
        <button type='submit'>Add Task</button>

       </form>
    )
}






export default TodoForm