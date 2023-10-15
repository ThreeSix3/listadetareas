import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function TaskDetailPage({ tasks, onTaskCompletion }) {
  const { taskId } = useParams();
  const task = tasks.find((t) => t.id === parseInt(taskId, 10));

  if (!task) {
    return <div>Tarea no encontrada.</div>;
  }

  const handleCompletionToggle = () => {
    onTaskCompletion(task.id, !task.completed);
  };

  return (
    <div className="container mt-5">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Fecha de creación: {task.date}</p>
      <p>Estado: {task.completed ? 'Completa' : 'Incompleta'}</p>
      <button className="btn btn-primary" onClick={handleCompletionToggle}>
        {task.completed ? 'Marcar como Incompleta' : 'Marcar como Completa'}
      </button>
    </div>
  );
}

export default TaskDetailPage;