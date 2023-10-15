import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import TaskDetailPage from './components/TaskDetailPage'
import TaskCreationPage from './components/TaskCreationPage'
import data from './data'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [tasks, setTasks] = useState(data);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<HomePage tasks={tasks} onTaskCompletion={handleTaskCompletion} />} />
          <Route path="/task/:taskId" element={<TaskDetailPage tasks={tasks} onTaskCompletion={handleTaskCompletion} />} />
          <Route path="/create" element={<TaskCreationPage tasks={tasks} addTask={addTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;