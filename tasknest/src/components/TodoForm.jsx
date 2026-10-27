import { useEffect, useState } from "react";

function TodoForm({
  onAddTask,
  editingTask,
  onUpdateTask,
  onCancelEdit,
}) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDueDate(editingTask.dueDate || "");
    } else {
      setTitle("");
      setDueDate("");
    }
  }, [editingTask]);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    const taskData = {
      title: trimmedTitle,
      dueDate,
    };

    if (editingTask) {
      onUpdateTask({
        ...editingTask,
        ...taskData,
      });
    } else {
      onAddTask(taskData);
    }

    setTitle("");
    setDueDate("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <h3>{editingTask ? "Edit task" : "Create a task"}</h3>
        <span>{editingTask ? "UPDATE YOUR PLAN" : "MAKE IT HAPPEN"}</span>
      </div>

      <div className="todo-form-fields">
        <div className="form-field task-title-field">
          <label htmlFor="task-title">Task name</label>

          <input
            id="task-title"
            type="text"
            placeholder="e.g. Finish my React project"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={150}
            required
          />
        </div>

        <div className="form-field task-date-field">
          <label htmlFor="task-date">Due date (optional)</label>

          <input
            id="task-date"
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />
        </div>
      </div>

      <div className="form-actions">
        {editingTask && (
          <button
            className="secondary-button"
            type="button"
            onClick={onCancelEdit}
          >
            Cancel
          </button>
        )}

        <button className="primary-button submit-task-button" type="submit">
          {editingTask ? "Save changes" : "+ Add task"}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;