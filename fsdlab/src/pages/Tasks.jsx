import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");

  // 🔹 Create Task (POST)
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, userId }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage("Task Created");
        console.log(data);
      })
      .catch(() => setMessage("Error creating task"));
  };

  // 🔹 Get Tasks by User
  const getTasks = () => {
    fetch(`http://localhost:5000/api/tasks/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      })
      .catch(() => setMessage("Error fetching tasks"));
  };

  // 🔹 Mark Complete
  const markComplete = (taskId) => {
    fetch(`http://localhost:5000/api/tasks/${taskId}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then(() => {
        getTasks(); // refresh list
      });
  };

  // 🔹 Delete Task
  const deleteTask = (taskId) => {
    fetch(`http://localhost:5000/api/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        getTasks(); // refresh list
      });
  };

  return (
    <div>
      <h2>Task Manager</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>

      <button onClick={getTasks}>Get Tasks</button>

      <p>{message}</p>

      {/* Display tasks */}
      {tasks.map((task) => (
        <div key={task._id}>
          <p>
            {task.title} - {task.completed ? "✅" : "❌"}
          </p>

          <button onClick={() => markComplete(task._id)}>
            Complete
          </button>

          <button onClick={() => deleteTask(task._id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default TaskForm;