import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasknest-tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Failed to load tasks:", error);
      return [];
    }
  });

  const [filter, setFilter] = useState("All");
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasknest-tasks", JSON.stringify(tasks));

    // Notify other components in the same browser window.
    window.dispatchEvent(new Event("tasknest-tasks-updated"));
  }, [tasks]);

  function addTask(taskData) {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskData.title,
      completed: false,
      dueDate: taskData.dueDate || "",
      createdAt: new Date().toISOString(),
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  function deleteTask(taskId) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );

    if (editingTask?.id === taskId) {
      setEditingTask(null);
    }
  }

  function toggleTask(taskId) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function startEditing(task) {
    setEditingTask(task);
  }

  function updateTask(updatedTask) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );

    setEditingTask(null);
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;

    return true;
  });

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <section className="content-panel">
      <div className="panel-heading">
        <div>
          <h2>Task manager</h2>
          <p>Plan your work. Celebrate your progress.</p>
        </div>

        <span className="section-badge">TO-DO</span>
      </div>

      <div className="task-summary">
        <div className="task-summary-item">
          <span>Total tasks</span>
          <strong>{tasks.length}</strong>
        </div>

        <div className="task-summary-item">
          <span>Completed</span>
          <strong className="completed-number">{completedCount}</strong>
        </div>

        <div className="task-summary-item">
          <span>Pending</span>
          <strong className="pending-number">{pendingCount}</strong>
        </div>
      </div>

      <TodoForm
        onAddTask={addTask}
        editingTask={editingTask}
        onUpdateTask={updateTask}
        onCancelEdit={() => setEditingTask(null)}
      />

      <div className="task-toolbar">
        <div>
          <h3>Your tasks</h3>
          <p>Keep moving forward, one task at a time.</p>
        </div>

        <div className="task-filters">
          {["All", "Pending", "Completed"].map((item) => (
            <button
              key={item}
              className={`filter-button ${
                filter === item ? "selected" : ""
              }`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <TodoList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={startEditing}
      />
    </section>
  );
}

export default TodoApp;