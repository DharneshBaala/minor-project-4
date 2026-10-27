function TodoItem({ task, onToggle, onDelete, onEdit }) {
  const formattedDate = task.dueDate
    ? new Date(`${task.dueDate}T00:00:00`).toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "short",
          year: "numeric",
        }
      )
    : null;

  return (
    <article className={`todo-item ${task.completed ? "is-completed" : ""}`}>
      <button
        className={`task-checkbox ${task.completed ? "checked" : ""}`}
        onClick={() => onToggle(task.id)}
        aria-label={
          task.completed ? "Mark task as pending" : "Mark task as completed"
        }
        aria-pressed={task.completed}
      >
        {task.completed ? "✓" : ""}
      </button>

      <div className="task-item-content">
        <h4>{task.title}</h4>

        <div className="task-item-meta">
          <span className={`task-status ${task.completed ? "done" : "pending"}`}>
            {task.completed ? "Completed" : "In progress"}
          </span>

          {formattedDate && (
            <span className="task-due-date">Due {formattedDate}</span>
          )}
        </div>
      </div>

      <div className="task-item-actions">
        <button
          className="task-action-button"
          onClick={() => onEdit(task)}
          aria-label={`Edit ${task.title}`}
          title="Edit task"
        >
          ✎
        </button>

        <button
          className="task-action-button delete-action"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.title}`}
          title="Delete task"
        >
          ×
        </button>
      </div>
    </article>
  );
}

export default TodoItem;