import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function TaskItem({ task, onTaskCompletion }) {
  const handleCompletionToggle = () => {
    onTaskCompletion(task.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link to={`/task/${task.id}`}>{task.title}</Link>
      <p>{task.description}</p>
      <button className="btn btn-primary" onClick={handleCompletionToggle}> 
        {task.completed ? 'Marcar como Incompleta' : 'Marcar como Completa'}
      </button>
    </li>
  );
}

export default TaskItem;