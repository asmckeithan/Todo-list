import React from 'react'


const TodoList = ({task}) => {
    return(
        <div>
            <ul>
                {task.map((task, index) => (
                    <li key={index}>{task}</li>
                )
                )}
            </ul>
        </div>
    )
}

export default Todolist