import React from "react";


const Popup = ({tasks, isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <div>
            <div>
               <h2>Task List</h2> 
               <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
               </ul>
               <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Popup