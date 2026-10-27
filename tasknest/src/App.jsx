import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoApp from "./components/TodoApp";
import NotesApp from "./components/NotesApp";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  // Load saved tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasknest-tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Failed to load tasks:", error);
      return [];
    }
  });

  // Load saved notes from localStorage
  const [notes, setNotes] = useState(() => {
    try {
      const savedNotes = localStorage.getItem("tasknest-notes");
      return savedNotes ? JSON.parse(savedNotes) : [];
    } catch (error) {
      console.error("Failed to load notes:", error);
      return [];
    }
  });

  // Keep Dashboard statistics synchronized with saved data
  useEffect(() => {
    function loadWorkspaceData() {
      try {
        const savedTasks = localStorage.getItem("tasknest-tasks");
        const savedNotes = localStorage.getItem("tasknest-notes");

        setTasks(savedTasks ? JSON.parse(savedTasks) : []);
        setNotes(savedNotes ? JSON.parse(savedNotes) : []);
      } catch (error) {
        console.error("Failed to refresh workspace data:", error);
      }
    }

    window.addEventListener("tasknest-tasks-updated", loadWorkspaceData);
    window.addEventListener("tasknest-notes-updated", loadWorkspaceData);
    window.addEventListener("storage", loadWorkspaceData);

    return () => {
      window.removeEventListener("tasknest-tasks-updated", loadWorkspaceData);
      window.removeEventListener("tasknest-notes-updated", loadWorkspaceData);
      window.removeEventListener("storage", loadWorkspaceData);
    };
  }, []);

  // Calculate task statistics
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className="app-container">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">
        {/* Page Header */}
        <header className="topbar">
          <div>
            <p className="eyebrow">YOUR PERSONAL WORKSPACE</p>

            <h1>
              {activePage === "Dashboard"
                ? "Good to see you."
                : activePage}
            </h1>

            <p className="page-description">
              {activePage === "Dashboard"
                ? "Organize your day. Focus on what matters."
                : activePage === "To-Do"
                  ? "Plan your tasks and make progress."
                  : "Capture your thoughts and keep your ideas organized."}
            </p>
          </div>

          <div className="profile-badge">T</div>
        </header>

        {/* Dashboard */}
        {activePage === "Dashboard" && (
          <>
            {/* Welcome Section */}
            <section className="dashboard-welcome">
              <div>
                <span className="welcome-label">
                  YOUR SPACE, YOUR RULES
                </span>

                <h2>Make today count.</h2>

                <p>
                  Small steps every day lead to remarkable results.
                  Plan your tasks and keep your best ideas close.
                </p>

                <div className="welcome-actions">
                  <button
                    className="primary-button"
                    onClick={() => setActivePage("To-Do")}
                  >
                    Explore tasks <span>↗</span>
                  </button>

                  <button
                    className="secondary-button"
                    onClick={() => setActivePage("Notes")}
                  >
                    Open notes
                  </button>
                </div>
              </div>

              <div className="welcome-decoration">
                <div className="orbit orbit-one"></div>
                <div className="orbit orbit-two"></div>
                <div className="orbit-center">✦</div>
                <span className="floating-star star-one">✦</span>
                <span className="floating-star star-two">✧</span>
              </div>
            </section>

            {/* Live Statistics */}
            <section className="stats-grid">
              <article className="stat-card">
                <div className="stat-icon blue-icon">▤</div>
                <p>Total tasks</p>
                <h3>{tasks.length}</h3>
                <span>Tasks in your workspace</span>
              </article>

              <article className="stat-card">
                <div className="stat-icon green-icon">✓</div>
                <p>Completed</p>
                <h3>{completedTasks}</h3>
                <span>Every step counts</span>
              </article>

              <article className="stat-card">
                <div className="stat-icon purple-icon">◷</div>
                <p>Pending</p>
                <h3>{pendingTasks}</h3>
                <span>Ready when you are</span>
              </article>

              <article className="stat-card">
                <div className="stat-icon orange-icon">✎</div>
                <p>Your notes</p>
                <h3>{notes.length}</h3>
                <span>Your ideas, in one place</span>
              </article>
            </section>

            {/* Workspace Cards */}
            <section className="dashboard-bottom">
              <div className="panel-heading">
                <div>
                  <h2>Your workspace</h2>
                  <p>Choose where you want to start.</p>
                </div>

                <span className="live-indicator">● WORKSPACE</span>
              </div>

              <div className="workspace-grid">
                <button
                  className="workspace-card task-workspace"
                  onClick={() => setActivePage("To-Do")}
                >
                  <div className="workspace-icon">✓</div>

                  <h3>Task manager</h3>

                  <p>Break your goals into manageable tasks.</p>

                  <span className="workspace-link">
                    Manage tasks <span>→</span>
                  </span>
                </button>

                <button
                  className="workspace-card notes-workspace"
                  onClick={() => setActivePage("Notes")}
                >
                  <div className="workspace-icon">✎</div>

                  <h3>Notes &amp; ideas</h3>

                  <p>
                    Keep your thoughts, plans, and ideas organized.
                  </p>

                  <span className="workspace-link">
                    Explore notes <span>→</span>
                  </span>
                </button>
              </div>
            </section>
          </>
        )}

        {/* To-Do Page */}
        {activePage === "To-Do" && <TodoApp />}

        {/* Notes Page */}
        {activePage === "Notes" && <NotesApp />}

        {/* Footer */}
        <footer className="app-footer">
          <span>TaskNest © 2026</span>

          <span>
            Built for better days{" "}
            <span className="footer-heart">♥</span>
          </span>
        </footer>
      </main>
    </div>
  );
}

export default App;