import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function TaskCreationPage({ tasks, addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed,
      date: new Date().toLocaleDateString(),
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  return (
    <div className="container mt-5">
      <h2>Crear Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <label className="form-check-label">
            Completada
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Tarea
        </button>
      </form>
    </div>
  );
}

export default TaskCreationPage;