import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TaskCard from "../components/TaskCard";
import "./Home.css";

const api = process.env.REACT_APP_API_URL;

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${api}/tasks`).then((res) => setTasks(res.data));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${api}/tasks/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filtered and searched tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = filterStatus === "all" || task.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <button className="btn btn1" onClick={() => navigate("/add")}>➕ Add Task</button>

      {/* Search and Filter UI */}
      <div className="form" style={{ margin: "10px 0" }}>
        <input
          type="text"
          placeholder="Search tasks by title"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="all">All</option>
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      {/* Task List */}
      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} onDelete={handleDelete} />
          ))
        ) : (
          <p>No tasks found.</p>
        )}
      </div>
    </div>
  );
}
