import React from "react";
import { useNavigate } from "react-router-dom";

export default function TaskCard({ task, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      {task.dueDate && <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>}
      <div className="actions">
        <button onClick={() => navigate(`/edit/${task.id}`)}>✏️ Edit</button>
        <button onClick={() => onDelete(task.id)}>🗑️ Delete</button>
      </div>
    </div>
  );
}
