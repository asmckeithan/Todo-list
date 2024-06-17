import React, { useState } from 'react';

//Creating a bullet point list for all new task
const TodoList = () => {
    const [tasks, setTasks] = useState([])
    return(
        <div>
            <ul>
                {tasks.map((tasks, index) => (
                    <li key={index}>{tasks}</li>
                )
                )}
            </ul>
        </div>
    )
}

export default TodoList