import TodoItem from "./TodoItem";

function TodoList({ tasks, onToggle, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="task-empty-state">
        <div className="task-empty-icon">✦</div>

        <h3>No tasks here yet</h3>

        <p>
          Add a task above and take the first step toward your goal.
        </p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;