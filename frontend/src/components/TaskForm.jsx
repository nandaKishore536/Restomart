import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const api = process.env.REACT_APP_API_URL;

export default function TaskForm({ mode, taskId }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "todo",
    dueDate: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === "edit" && taskId) {
      axios.get(`${api}/tasks`).then((res) => {
        const found = res.data.find((t) => t.id === taskId);
        if (found) {
          setForm({
            title: found.title,
            description: found.description || "",
            status: found.status,
            dueDate: found.dueDate ? found.dueDate.split("T")[0] : "",
          });
        }
      });
    }
  }, [mode, taskId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = mode === "edit" ? "put" : "post";
    const url = mode === "edit" ? `${api}/tasks/${taskId}` : `${api}/tasks`;

    axios[method](url, form).then(() => navigate("/"));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{mode === "edit" ? "Edit" : "Add"} Task</h3>
      <input
        type="text"
        required
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option value="todo">To Do</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <input
        type="date"
        value={form.dueDate}
        onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
      />
      <button className="btn" type="submit">
        {mode === "edit" ? "Update" : "Add"} Task
      </button>
    </form>
  );
}
