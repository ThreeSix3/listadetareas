import React from 'react'
import { Link } from 'react-router-dom'
import TaskItem from './TaskItem'
import 'bootstrap/dist/css/bootstrap.min.css'

function HomePage({ tasks, onTaskCompletion }) {
  return (
    <div className="container mt-5"> 
      <h1>Lista de Tareas</h1>
      <ul className="list-group">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onTaskCompletion={onTaskCompletion} />
        ))}
      </ul>
      <Link to="/create" className="btn btn-primary mt-3">
        Crear Nueva Tarea
      </Link>
    </div>
  );
}

export default HomePage;