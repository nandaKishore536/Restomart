
# 📝 Task Manager Web Application

## Company: Restomart  
**Role**: Technical Intern  
**Candidate**: Maddineni Nanda Kishore  

---

## 🎯 Objective

Develop a full-stack Task Manager web application with:

- A **RESTful API backend** using Node.js, Express.js, and MongoDB
- A **React.js frontend** with plain CSS (no UI libraries)
- Basic task management (add, edit, delete, view)
- Optional features like search, filter, and dark/light mode
- No authentication required

---

## 🛠 Tech Stack

| Layer     | Technologies              |
|-----------|---------------------------|
| Backend   | Node.js, Express.js, MongoDB |
| Frontend  | React.js, CSS             |
| Tools     | Axios, React Router, Dotenv |

---

## 📁 Folder Structure

```
task-manager/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── index.js
│   ├── .env
│   └── package.json
├── frontend/
│   └── src/
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── AddTask.jsx
│       │   └── EditTask.jsx
│       ├── components/
│       │   ├── TaskCard.jsx
│       │   └── TaskForm.jsx
│       ├── App.jsx
│       ├── App.css
│       └── index.js
│   ├── .env
│   └── package.json
```

---

## ⚙️ Backend Setup

### ✅ Prerequisites

- Node.js and npm
- MongoDB (local or cloud)

### 🔧 Installation

```bash
cd backend
npm install
```

### 🛠 Environment Setup

Create a `.env` file in `backend/`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
```

> Replace `MONGO_URI` with your actual MongoDB connection string if using MongoDB Atlas.

### 🚀 Start Backend Server

```bash
npm start
```

Backend will run at: `http://localhost:5000`

---

## 💻 Frontend Setup

### ✅ Prerequisites

- Node.js and npm

### 🔧 Installation

```bash
cd frontend
npm install
```

### 🛠 Environment Setup

Create a `.env` file in `frontend/`:

```
REACT_APP_API_URL=http://localhost:5000
```

### 🚀 Start Frontend

```bash
npm start
```

Frontend will run at: `http://localhost:3000`

---

## 📡 API Endpoints

| Method | Endpoint         | Description       |
|--------|------------------|-------------------|
| GET    | /tasks           | List all tasks    |
| POST   | /tasks           | Create a new task |
| PUT    | /tasks/:id       | Update a task     |
| DELETE | /tasks/:id       | Delete a task     |

---

## 🌐 Frontend Routes

| Path        | Functionality            |
|-------------|--------------------------|
| `/`         | View all tasks           |
| `/add`      | Add a new task           |
| `/edit/:id` | Edit an existing task    |

---

## ✅ Features Implemented

- ✅ Add / Edit / Delete Tasks
- ✅ Task Filtering by Status (To Do, In Progress, Done)
- ✅ Search by Task Title
- ✅ Dark Mode / Light Mode Toggle
- ✅ Form Validation (e.g., required title)
- ✅ Responsive Layout for Mobile and Desktop

---


### Backend

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
```

### Frontend

```
REACT_APP_API_URL=http://localhost:5000
```

---

## 🚧 Known Limitations

- No authentication or user roles
- No pagination or sorting
- Not deployed (runs locally)

---

## 📌 Final Notes

This project demonstrates a basic but complete full-stack application using the MERN stack without user authentication. It's designed with clean, modular code and includes optional UX improvements.

> You are welcome to fork, modify, and build on top of this project for learning or production use.

---

**Thank you!**
